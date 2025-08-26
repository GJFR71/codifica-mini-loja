import React from 'react'
import './index.css'
import { PRODUCTS } from './data/products'
import { Navbar } from './components/Navbar'
import { ProductCard } from './components/ProductCard'
import { CardSkeleton } from './components/Skeleton'
import { CartProvider, ThemeProvider, ThemeContext } from './contexts/context'

function AppInner(){
  const { theme, toggle } = React.useContext(ThemeContext)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{ const t=setTimeout(()=> setLoading(false),900); return ()=>clearTimeout(t) },[])
  return (
    <>
      <Navbar onToggleTheme={toggle} theme={theme} />
      <div className="max-w-[1200px] mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
