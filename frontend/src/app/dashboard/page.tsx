import clsx from 'clsx'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Dashboard() {
  return (
    <h1 className="flex flex-col gap-1 text-xl">
      Welcome back,{' '}
      <strong className={clsx('text-4xl', roboto.className)}>
        Nathan Soares
      </strong>
    </h1>
  )
}
