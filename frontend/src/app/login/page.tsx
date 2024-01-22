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
    <div className="grid-cols-login grid">
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

      <aside className="h-screen bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-800 text-zinc-50">
        <div className="flex flex-col items-center pt-80">
          <span className="pb-3 text-lg text-zinc-200">
            É bom te ver novamente
          </span>
          <span className="flex flex-col items-center text-center text-7xl">
            BEM-VINDO DE VOLTA
            <div className="mt-4 h-2 w-16 rounded-full bg-white" />
          </span>
        </div>
      </aside>
    </div>
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
