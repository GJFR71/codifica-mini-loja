import React from 'react'
import styles from './Navbar.module.css'
import { useCart } from '../contexts/context'

export function Navbar({ onToggleTheme, theme }){
  const { count } = useCart()
  return (
    <div className={styles['nav']}>
      <div className="container" style={{height:64, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div className={styles['brand']}><span aria-hidden="true">🛒</span> Mini Loja</div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <button className="btn btn-outline" onClick={onToggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
          <div aria-label={`Itens no carrinho: ${count}`}>Carrinho <span className={styles['badge']} aria-hidden="true">{count}</span></div>
        </div>
      </div>
    </div>
  )
}
