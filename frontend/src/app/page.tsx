import clsx from 'clsx'
import { Metadata } from 'next'
import { Roboto_Serif as RobotoSerif } from 'next/font/google'

const roboto = RobotoSerif({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Login | MyCompany',
}

export default function Home() {
  return (
    <div className="grid-cols-half grid">
      <div className="h-screen bg-gradient-to-b from-blue-theme to-sky-400">
        <h1
          className={clsx('p-10 font-semibold text-zinc-50', roboto.className)}
        >
          MyCompany
        </h1>
        Nice to see you again
        <div>WELCOME BACK</div>
      </div>
      <div>Login Account</div>
    </div>
  )
}
