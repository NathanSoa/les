import clsx from 'clsx'
import { Metadata } from 'next'
import { Roboto_Serif as RobotoSerif, Roboto } from 'next/font/google'

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
    <div className="grid-cols-half grid">
      <aside className="h-screen bg-gradient-to-b  from-sky-400 via-blue-600 to-indigo-800 text-zinc-50">
        <h1 className={clsx('p-10 font-medium', robotoSerif.className)}>
          MyCompany
        </h1>
        <div className="mt-36 flex flex-col items-center">
          <span className="pb-3 text-lg text-zinc-200">
            Nice to see you again
          </span>
          <span className="flex flex-col items-center text-7xl">
            WELCOME BACK
            <div className="mt-4 h-2 w-16 rounded-full bg-white" />
          </span>
        </div>
      </aside>
      <main
        className={clsx(
          'mx-auto px-10 pt-36 text-2xl font-bold text-sky-500',
          roboto.className,
        )}
      >
        <h2>Login Account</h2>
      </main>
    </div>
  )
}
