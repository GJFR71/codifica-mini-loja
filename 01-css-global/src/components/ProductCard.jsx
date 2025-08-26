import React, { useState } from 'react'
import { Stars } from '../contexts/context'
import { Button } from './Button'
import { useCart } from '../contexts/context'

export function ProductCard({ product }){
  const { add } = useCart()
  const [loading, setLoading] = useState(false)
  return (
    <article className="card">
      <img
        className="card-media"
        src={product.image}
        alt={`Imagem do produto ${product.title}`}
        loading="lazy"
        width="400" height="400"
      />
      <div className="card-body">
        <div className="row">
          <h3 className="title">{product.title}</h3>
          <span className="tag" aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
        </div>
        <div className="row" style={{justifyContent:'space-between'}}>
          <span className="price" aria-label={`Preço: R$ ${product.price.toFixed(2)}`}>
            R$ {product.price.toFixed(2)}
          </span>
          <span className="muted"><Stars value={product.rating} /></span>
        </div>
        <Button
          onClick={() => { setLoading(true); setTimeout(() => { add(); setLoading(false)}, 700)}}
          disabled={loading}
          aria-busy={loading}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          {loading ? 'Adicionando…' : 'Adicionar'}
        </Button>
      </div>
    </article>
  )
}
