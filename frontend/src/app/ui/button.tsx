'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function ButtonRoot(props: ButtonRootProps) {
  return (
    <button {...props} className={twMerge('base-button', props.className)}>
      {props.children}
    </button>
  )
}

function ButtonIcon({ icon: Icon }: { icon: ReactNode }) {
  return <span>{Icon}</span>
}

function ButtonLabel({ label }: { label: string }) {
  return <span>{label}</span>
}

const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Label: ButtonLabel,
}

export default Button
