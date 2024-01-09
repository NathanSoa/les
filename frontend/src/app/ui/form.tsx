import { FormHTMLAttributes, ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export default function Form(props: FormProps) {
  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={props.onSubmit}>
      <div className="font-semibold uppercase">
        Campos marcados com * são obrigatórios
      </div>
      {props.children}
    </form>
  )
}
