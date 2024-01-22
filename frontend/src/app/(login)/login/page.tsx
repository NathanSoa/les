import clsx from 'clsx'
import { Metadata } from 'next'
import { Roboto_Serif as RobotoSerif } from 'next/font/google'
import Link from 'next/link'

import FormLogin from '@/app/ui/login/form'
import CompanyLogo from '@/app/ui/common/company-logo'
import GoogleButton from '@/app/ui/login/google-button'

const robotoSerif = RobotoSerif({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Login | MyCompany',
}

export default function Home() {
  return (
    <main className={'mx-16 pt-16 font-bold'}>
      <h1
        className={clsx(
          'flex items-center gap-3 font-medium',
          robotoSerif.className,
        )}
      >
        <CompanyLogo size={80} className="text-indigo-800" />
        <span className="text-3xl text-indigo-800">MyCompany</span>
      </h1>
      <span className="font-medium text-slate-400">
        Tudo que você precisa num só site
      </span>
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
