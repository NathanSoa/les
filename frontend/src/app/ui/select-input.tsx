import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly string[]
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ options, ...rest }, ref) => {
    return (
      <select
        {...rest}
        ref={ref}
        className="h-7 w-full rounded-lg border border-gray-400 bg-white pl-2"
      >
        <option value="" className="font-sans">
          Selecione um valor
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option} className="font-sans">
              {option}
            </option>
          )
        })}
      </select>
    )
  },
)

SelectInput.displayName = 'SelectInput'

export default SelectInput
