import React, { useState } from 'react'
import s from './ProductCard.module.css'
import { Stars, useCart } from '../contexts/context'
import { Button } from './Button'

export function ProductCard({ product }){
  const { add } = useCart()
  const [loading, setLoading] = useState(false)
  return (
    <article className={s.card}>
      <img className={s.media} src={product.image} alt={`Imagem do produto ${product.title}`} width="400" height="400" loading="lazy" />
      <div className={s.body}>
        <div className={s.row}>
          <h3 className={s.title}>{product.title}</h3>
          <span className={s.tag} aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
        </div>
        <div className={s.row}>
          <span className={s.price}>R$ {product.price.toFixed(2)}</span>
          <span className={s.muted}><Stars value={product.rating} /></span>
        </div>
        <Button onClick={() => { setLoading(true); setTimeout(()=>{ add(); setLoading(false)}, 700) }} disabled={loading} aria-busy={loading}>
          {loading ? 'Adicionando…' : 'Adicionar'}
        </Button>
      </div>
    </article>
  )
}
