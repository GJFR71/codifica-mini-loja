import React from 'react'

export function Button({ variant='solid', disabled=false, children, ...rest }){
  const cls = `btn btn-${variant}`
  return (
    <button
      type="button"
      className={cls}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
