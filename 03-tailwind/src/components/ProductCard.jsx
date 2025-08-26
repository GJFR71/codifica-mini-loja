import React, { useState } from 'react'
import { Stars, useCart } from '../contexts/context'
import { Button } from './Button'

export function ProductCard({ product }){
  const { add } = useCart()
  const [loading, setLoading] = useState(false)
  return (
    <article className="bg-[color:var(--card)] border border-[color:var(--border)] rounded-xl overflow-hidden transition duration-180 hover:-translate-y-[2px] shadow-none hover:shadow-card dark:hover:shadow-cardDark">
      <img src={product.image} alt={`Imagem do produto ${product.title}`} loading="lazy" width="400" height="400" className="aspect-square w-full object-cover bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)]" />
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="line-clamp-2 min-h-[2.6em]">{product.title}</h3>
          <span className="text-xs px-2 py-0.5 border border-[color:var(--border)] rounded-full">{product.tag}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">R$ {product.price.toFixed(2)}</span>
          <span className="text-[color:var(--muted)]"><Stars value={product.rating}/></span>
        </div>
        <Button onClick={()=>{ setLoading(true); setTimeout(()=>{ add(); setLoading(false)},700) }} disabled={loading} aria-busy={loading}>
          {loading ? 'Adicionando…' : 'Adicionar'}
        </Button>
      </div>
    </article>
  )
}
