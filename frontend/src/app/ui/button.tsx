import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function ButtonRoot(props: ButtonRootProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded-xl border px-10 py-3 font-semibold transition duration-300 ease-in-out',
        props.className,
      )}
    >
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
