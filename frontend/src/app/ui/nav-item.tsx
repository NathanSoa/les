'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'

interface NavItemProps {
  href: string
  text: string
  icon: ReactNode
}

export default function NavItem({ href, text, icon: Icon }: NavItemProps) {
  const pathname = usePathname()
  const isActualTab = href === pathname
  const liClassName = isActualTab ? 'bg-white text-zinc-700' : 'text-zinc-50'
  const iconClassName = isActualTab ? 'text-blue-theme' : 'text-zinc-50'

  return (
    <li
      className={clsx(
        'flex w-full items-center justify-center gap-4 rounded-lg p-3 font-bold',
        liClassName,
      )}
    >
      <span className={clsx('text-3xl', iconClassName)}>{Icon}</span>
      <Link href={href}>{text}</Link>
    </li>
  )
}
