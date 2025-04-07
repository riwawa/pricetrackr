import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div className="container">
      <h1>📊 PriceTrackr</h1>
      {produtos.map((produto) => (
        <Link to={`/produto/${produto.id}`} key={produto.id}>
          <div className="card">
            <h2>{produto.name}</h2>
            <p>Último preço: R$ {produto.ultimo_preco.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
