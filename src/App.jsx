import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [produtos, setProdutos] = useState([])
  const [historico, setHistorico] = useState({})
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [mensagem, setMensagem] = useState('')

  const carregarProdutos = async () => {
    try {
      const res = await axios.get('http://localhost:8008/produtos')
      setProdutos(res.data)

      // Para cada produto, busca o histórico de preços
      const historicoData = {}
      for (const produto of res.data) {
        const histRes = await axios.get(`http://localhost:8008/produtos/${produto.id}/historico`)
        historicoData[produto.id] = histRes.data
      }
      setHistorico(historicoData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensagem('')
    try {
      await axios.post('http://localhost:8008/produtos', {
        name,
        url
      })
      setMensagem('✅ Produto cadastrado com sucesso!')
      setName('')
      setUrl('')
      carregarProdutos()
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMensagem('⚠️ Produto já cadastrado.')
      } else {
        setMensagem('❌ Erro ao cadastrar produto.')
        console.error(error)
      }
    }
  }

  return (
    <div className="p-6 font-sans max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📦 Produtos monitorados</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border w-full p-2 rounded"
        />
        <input
          type="url"
          placeholder="URL do produto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="border w-full p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Adicionar produto
        </button>
        {mensagem && (
          <p className="text-sm mt-2">
            {mensagem}
          </p>
        )}
      </form>

      <ul className="space-y-4">
        {produtos.map(p => (
          <li key={p.id} className="border p-4 rounded-lg shadow">
            <p className="font-semibold">{p.name}</p>
            <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">Ver produto</a>

            {historico[p.id] && (
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <p className="font-semibold mt-2">Histórico de preços:</p>
                {historico[p.id].map(h => (
                  <li key={h.timestamp}>
                    💰 R$ {h.price.toFixed(2)} em {new Date(h.timestamp).toLocaleString()}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
