import React, { useEffect } from 'react'
import './styles/global.css'
import { PRODUCTS } from './data/products'
import { ProductCard } from './components/ProductCard'
import { CardSkeleton } from './components/Skeleton'
import { CartProvider, ThemeProvider, ThemeContext, CartContext } from './contexts/context'

function Grid(){
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(t)
  }, [])
  if(isLoading){
    return (
      <div className="container" style={{paddingTop:16}}>
        <div className="grid" aria-live="polite" aria-busy="true">
          {Array.from({length:6}).map((_,i) => <CardSkeleton key={i} />)}
        </div>
      </div>
    )
  }
  return (
    <div className="container" style={{paddingTop:16}}>
      <div className="grid">
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

function NavbarInner(){
  const { theme, toggle } = React.useContext(ThemeContext)
  const { count } = React.useContext(CartContext)
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <div className="brand"><span aria-hidden="true">🛒</span> Mini Loja</div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <button className="btn btn-outline" aria-label="Alternar tema" onClick={toggle}>
            {theme === 'dark' ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
          <div aria-label={`Itens no carrinho: ${count}`}>Carrinho <span className="badge" aria-hidden="true">{count}</span></div>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <ThemeProvider onApply={(t)=>{ document.documentElement.classList.toggle('dark', t==='dark') }}>
      <CartProvider>
        <NavbarInner />
        <Grid />
      </CartProvider>
    </ThemeProvider>
  )
}

