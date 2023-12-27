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
      <main className={'mx-auto px-10 pt-36 text-2xl font-bold text-sky-500'}>
        <h1 className={clsx('text-center', roboto.className)}>Login Account</h1>
        <form className="flex flex-col gap-5 pt-10 text-base">
          <div>
            <label
              htmlFor="email"
              className="pb-2 text-sm font-normal text-slate-600"
            >
              E-mail
            </label>
            <div className="flex h-10 w-80 bg-slate-100 focus-within:outline focus-within:outline-1 focus-within:outline-indigo-400">
              <div className="w-1 bg-blue-500" />
              <input
                type="text"
                id="email"
                placeholder="E-mail"
                className="w-full bg-transparent pl-3 text-slate-600 outline-none placeholder:font-medium"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="pb-2 text-sm font-normal text-slate-600"
            >
              Password
            </label>
            <div className="flex h-10 w-80 bg-slate-100 focus-within:outline focus-within:outline-1 focus-within:outline-indigo-400">
              <div className="w-1 bg-blue-500" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full bg-transparent pl-3 text-slate-600 outline-none placeholder:font-medium"
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
