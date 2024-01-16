import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <input
        {...props}
        className={twMerge(
          props.className,
          'h-7 w-full rounded-lg border border-gray-400 p-2',
        )}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
