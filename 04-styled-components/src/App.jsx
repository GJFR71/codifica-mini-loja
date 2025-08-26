import React from 'react'
import { PRODUCTS } from './data/products'
import { CartProvider, ThemeProvider, ThemeContext } from './contexts/context'
import { Page } from './components/StyledPage'

function AppInner(){
  const { theme, toggle } = React.useContext(ThemeContext)
  return <Page themeName={theme} toggleTheme={toggle} products={PRODUCTS} />
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
