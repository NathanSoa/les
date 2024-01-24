'use client'

import Button from '@/app/ui/common/button'
import Link from 'next/link'
import LoginSectionInput from './input'

export default function FormLogin() {
  return (
    <form className="flex flex-col gap-5 pt-10 text-base">
      <LoginSectionInput label="E-mail" id="email" placeholder="E-mail*" />
      <div>
        <LoginSectionInput
          label="Senha"
          id="password"
          placeholder="Senha*"
          type="password"
        />
        <div className="pt-2 text-right font-medium text-slate-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-indigo-500">
          <Link href="forget-password">Esqueci minha senha</Link>
        </div>
      </div>

      <Button.Root className="border-blue-theme text-blue-500 hover:bg-blue-500 hover:text-white">
        <Button.Label label="Login" />
      </Button.Root>
    </form>
  )
}
