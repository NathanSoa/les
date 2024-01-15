import clsx from 'clsx'
import { Metadata } from 'next'
import { Roboto_Serif as RobotoSerif, Roboto } from 'next/font/google'

import FormLogin from '@/app/ui/login/form'

const robotoSerif = RobotoSerif({
  weight: '500',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Login | MyCompany',
}

export default function Home() {
  return (
    <div className="grid grid-cols-half">
      <aside className="h-screen bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-800 text-zinc-50">
        <h1 className={clsx('p-10 font-medium', robotoSerif.className)}>
          MyCompany
        </h1>
        <div className="flex flex-col items-center pt-48">
          <span className="pb-3 text-lg text-zinc-200">
            É bom te ver novamente
          </span>
          <span className="flex flex-col items-center text-center text-7xl">
            BEM-VINDO DE VOLTA
            <div className="mt-4 h-2 w-16 rounded-full bg-white" />
          </span>
        </div>
      </aside>
      <main className={'mx-auto px-10 pt-36 text-2xl font-bold text-sky-500'}>
        <h1 className={clsx('text-center', roboto.className)}>Login</h1>
        <FormLogin />
      </main>
    </div>
  )
}
