import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './PokemonAPI/Index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
