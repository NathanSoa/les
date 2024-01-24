import { Metadata } from 'next'
import Link from 'next/link'

import FormLogin from '@/app/ui/login/login-form'
import GoogleButton from '@/app/ui/login/google-button'
import LogoWithSlogan from '@/app/ui/login/logo-with-slogan'

export const metadata: Metadata = {
  title: 'Login | MyCompany',
}

export default function Home() {
  return (
    <main className={'mx-16 pt-16 font-bold'}>
      <LogoWithSlogan />
      <FormLogin />
      <Divisor />
      <GoogleButton />
      <div className="pt-16 text-center font-medium text-slate-600">
        Ainda não possui uma conta?{' '}
        <Link
          href="register"
          className="font-bold text-indigo-500 transition duration-300 ease-in-out hover:text-indigo-700"
        >
          Cadastre-se aqui.
        </Link>
      </div>
    </main>
  )
}

function Divisor() {
  return (
    <div className="flex items-center gap-2 py-12">
      <div className="h-0.5 w-full bg-slate-400" />
      <div className="text-slate-400">ou</div>
      <div className="h-0.5 w-full bg-slate-400" />
    </div>
  )
}
