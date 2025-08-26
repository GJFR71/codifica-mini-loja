import React from 'react'

export function CardSkeleton(){
  return (
    <div className="card" aria-hidden="true">
      <div className="card-media skeleton shimmer"></div>
      <div className="card-body">
        <div className="skeleton shimmer" style={{height:16, width:'85%'}}></div>
        <div className="skeleton shimmer" style={{height:16, width:'70%'}}></div>
        <div className="skeleton shimmer" style={{height:12, width:'40%'}}></div>
        <div className="skeleton shimmer" style={{height:36, width:'100%'}}></div>
      </div>
    </div>
  )
}
