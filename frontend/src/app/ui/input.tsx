import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={twMerge(
        props.className,
        'h-7 w-full rounded-lg border border-gray-400 p-2',
      )}
    />
  )
}
