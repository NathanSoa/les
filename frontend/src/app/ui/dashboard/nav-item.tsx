import { ReactNode } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useTabStyle } from '@/app/hooks/useTabStyle'

interface NavItemProps {
  href: string
  text: string
  icon: ReactNode
}

export default function NavItem({ href, text, icon: Icon }: NavItemProps) {
  const { liClassName, iconClassName } = useTabStyle(href)

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
