# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛒 PriceTrackr

O **PriceTrackr** é uma aplicação web desenvolvida com **FastAPI**, **SQLite**, **Jinja2**, **SQLAlchemy** e **BeautifulSoup** para acompanhar a variação de preços de produtos da Amazon em tempo real.

## ✨ Funcionalidades

- 🔍 Rastreamento automático de preços
- 🧾 Histórico de preços por produto
- 🖥️ Interface Web com formulários
- 🗂️ Organização em módulos (API, Web, DB, Scraper)

## 🚀 Tecnologias Utilizadas

- **Python**
- **FastAPI**
- **SQLAlchemy**
- **BeautifulSoup**
- **Jinja2**
- **SQLite**
- **HTML/CSS**
- **JavaScript** (se necessário)
- **Uvicorn**

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/pricetrackr.git
cd pricetrackr
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
