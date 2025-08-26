import React from 'react'

export function Button({ variant='solid', disabled=false, children, ...rest }){
  const base = "px-3 py-2 rounded-[10px] font-semibold transition duration-180 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] disabled:opacity-55 disabled:cursor-not-allowed"
  const variants = {
    solid: "bg-[color:var(--primary)] text-white hover:-translate-y-[2px] shadow-card dark:shadow-cardDark",
    outline: "border border-[color:var(--border)] hover:-translate-y-[2px]",
    ghost: "text-[color:var(--muted)] hover:bg-[color:color-mix(in_oklab,var(--fg)_7%,transparent)]"
  }
  return <button type="button" className={`${base} ${variants[variant]}`} disabled={disabled} {...rest}>{children}</button>
}
