import React from 'react'
import s from './ProductCard.module.css'
export function CardSkeleton(){
  return (
    <div className={s.card} aria-hidden="true">
      <div className={s.media + ' ' + s.skeleton + ' ' + s.shimmer}></div>
      <div className={s.body}>
        <div className={s.skeleton + ' ' + s.shimmer} style={{height:16, width:'85%'}}></div>
        <div className={s.skeleton + ' ' + s.shimmer} style={{height:16, width:'70%'}}></div>
        <div className={s.skeleton + ' ' + s.shimmer} style={{height:12, width:'40%'}}></div>
        <div className={s.skeleton + ' ' + s.shimmer} style={{height:36, width:'100%'}}></div>
      </div>
    </div>
  )
}
