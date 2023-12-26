import clsx from 'clsx'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Dashboard() {
  return (
    <h1 className="flex flex-col gap-1 text-xl">
      Welcome back,{' '}
      <strong className={clsx('text-4xl', true && inter.className)}>
        Nathan Soares
      </strong>
    </h1>
  )
}
