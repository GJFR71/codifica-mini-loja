import React from 'react'
import cls from './Button.module.css'

export function Button({ variant='solid', disabled=false, children, ...rest }){
  const className = [cls.btn, cls[variant], disabled ? cls.disabled : ''].join(' ')
  return <button type="button" className={className} disabled={disabled} {...rest}>{children}</button>
}
