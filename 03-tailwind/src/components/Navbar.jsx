import React from 'react'
import { useCart } from '../contexts/context'

export function Navbar({ onToggleTheme, theme }){
  const { count } = useCart()
  return (
    <div className="sticky top-0 z-10 backdrop-blur border-b border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--bg)_92%,transparent)]">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold"><span aria-hidden="true">🛒</span> Mini Loja</div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="px-3 py-2 rounded-[10px] border border-[color:var(--border)] hover:-translate-y-[2px] transition duration-180 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
          >
            {theme==='dark' ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
          <div aria-label={`Itens no carrinho: ${count}`}>
            Carrinho <span className="min-w-6 h-6 px-1 inline-flex items-center justify-center text-white bg-[color:var(--primary)] rounded-full text-xs ml-1" aria-hidden="true">{count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
