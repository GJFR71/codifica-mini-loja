import React from 'react'

export function CardSkeleton(){
  return (
    <div className="bg-[color:var(--card)] border border-[color:var(--border)] rounded-xl overflow-hidden">
      <div className="aspect-square w-full bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)] animate-pulse"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 w-5/6 bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)] animate-pulse rounded"></div>
        <div className="h-4 w-3/5 bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)] animate-pulse rounded"></div>
        <div className="h-3 w-2/5 bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)] animate-pulse rounded"></div>
        <div className="h-9 w-full bg-[color:color-mix(in_oklab,var(--fg)_10%,transparent)] animate-pulse rounded"></div>
      </div>
    </div>
  )
}
