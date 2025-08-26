import React from 'react'
import { useCart } from '../contexts/context'

export function Navbar({ onToggleTheme, theme }){
  const { count } = useCart()
  return (
    <div className="navbar">
      <div className="container navbar-inner" role="navigation" aria-label="Barra de navegação">
        <div className="brand" aria-label="Logo Mini Loja">
          <span aria-hidden="true">🛒</span> <span>Mini Loja</span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <button
            className="btn btn-outline"
            aria-pressed={theme === 'dark'}
            aria-label="Alternar tema claro/escuro"
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
          <div aria-label={`Itens no carrinho: ${count}`}>
            Carrinho <span className="badge" aria-hidden="true">{count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
