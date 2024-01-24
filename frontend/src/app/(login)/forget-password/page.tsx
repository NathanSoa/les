import { Metadata } from 'next'

import LogoWithSlogan from '@/app/ui/login/logo-with-slogan'
import LoginSectionInput from '@/app/ui/login/input'
import Button from '@/app/ui/common/button'

export const metadata: Metadata = {
  title: 'Esqueci minha senha | MyCompany',
}

export default function Home() {
  return (
    <main className={'mx-16 pt-16 font-bold'}>
      <LogoWithSlogan />
      <div className="flex flex-col gap-8 pt-16">
        <div>
          <h2 className={'text-2xl font-bold text-indigo-600'}>
            Esqueci minha senha
          </h2>
          <p className={'pt-2 font-medium text-gray-500'}>
            Digite seu e-mail abaixo para redefinir sua senha.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <LoginSectionInput
            label="E-mail"
            type="text"
            id="email"
            placeholder="E-mail*"
          />
          <Button.Root className="border-blue-theme text-blue-700 transition duration-300 hover:bg-blue-500 hover:text-white">
            <Button.Label label="Redefinir" />
          </Button.Root>
        </form>
      </div>
    </main>
  )
}
