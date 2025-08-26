import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
export function useCart(){ return useContext(CartContext) }
export function CartProvider({ children }){
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('cart-count')
    return saved ? parseInt(saved, 10) : 0
  })
  useEffect(() => { localStorage.setItem('cart-count', String(count)) }, [count])
  const value = useMemo(() => ({ count, add: () => setCount(c => c+1) }), [count])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const ThemeContext = createContext(null)
export function useTheme(){ return useContext(ThemeContext) }
export function ThemeProvider({ children, onApply }){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    onApply?.(theme)
  }, [theme, onApply])
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { CartContext, ThemeContext }

export function Stars({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  const stars = "★".repeat(full) + (half ? "★" : "") + "☆".repeat(empty)
  return (
    <span aria-label={`Avaliação: ${value} de 5`} title={`${value.toFixed(1)} / 5`}>{stars}</span>
  )
}
