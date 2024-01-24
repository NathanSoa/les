'use client'

import Button from '@/app/ui/common/button'
import LoginSectionInput from './input'

export default function FormRegister() {
  return (
    <form className="flex flex-col gap-5 pt-10 text-base">
      <LoginSectionInput
        label="Nome completo"
        id="name"
        placeholder="Nome completo"
        type="text"
      />
      <LoginSectionInput label="CPF" id="cpf" placeholder="CPF" type="text" />
      <LoginSectionInput
        label="E-mail"
        id="email"
        placeholder="E-mail"
        type="text"
      />
      <LoginSectionInput
        label="Senha"
        id="password"
        placeholder="Senha"
        type="password"
      />
      <LoginSectionInput
        label="Confirme a senha"
        id="passwordConfirm"
        placeholder="Confirme a senha"
        type="password"
      />

      <Button.Root className="border-blue-theme text-blue-500 hover:bg-blue-500 hover:text-white">
        <Button.Label label="Cadastrar-se" />
      </Button.Root>
    </form>
  )
}
