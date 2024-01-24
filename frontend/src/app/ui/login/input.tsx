import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const LoginSectionInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div>
        <label
          htmlFor={rest.id}
          className="pb-2 text-sm font-normal text-zinc-500"
        >
          {label}
        </label>
        <div className="flex h-10 bg-slate-100 focus-within:outline focus-within:outline-1 focus-within:outline-indigo-400">
          <div className="w-1 bg-blue-500" />
          <input
            ref={ref}
            className="w-full bg-transparent pl-3 text-slate-600 outline-none placeholder:font-medium"
            {...rest}
          />
        </div>
      </div>
    )
  },
)

LoginSectionInput.displayName = 'LoginSectionInput'

export default LoginSectionInput
