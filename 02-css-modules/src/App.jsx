import { ThemeContext } from "./contexts/context"
import React from 'react'
import './styles/tokens.css'
import './styles/layout.css'
import { PRODUCTS } from './data/products'
import { ProductCard } from './components/ProductCard'
import { CardSkeleton } from './components/Skeleton'
import { CartProvider, ThemeProvider } from './contexts/context'

function AppInner(){
  const { theme, toggle } = React.useContext(ThemeContext)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 900)
    return ()=> clearTimeout(t)
  },[])
  return (
    <>
      <div className="nav" style={{position:'sticky', top:0, background:'color-mix(in oklab, var(--bg) 92%, transparent)', borderBottom:'1px solid var(--border)', backdropFilter:'blur(6px)', zIndex:10}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
          <div style={{display:'flex', alignItems:'center', gap:12, fontWeight:700}}><span aria-hidden="true">🛒</span> Mini Loja</div>
          <button className="btn btn-outline" onClick={toggle} aria-label="Alternar tema">{theme==='dark' ? 'Tema: Escuro' : 'Tema: Claro'}</button>
        </div>
      </div>
      <div className="container" style={{paddingTop:16}}>
        <div className="grid">
          {loading ? Array.from({length:6}).map((_,i)=><CardSkeleton key={i}/>) : PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </>
  )
}

export default function App(){
  return (
    <ThemeProvider onApply={(t)=>{ document.documentElement.classList.toggle('dark', t==='dark') }}>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </ThemeProvider>
  )
}
