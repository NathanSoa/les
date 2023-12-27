import { ReactNode } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useTabStyle } from '@/hooks/useTabStyle'

interface NavItemProps {
  href: string
  text: string
  icon: ReactNode
}

export default function NavItem({ href, text, icon: Icon }: NavItemProps) {
  const { liClassName, iconClassName } = useTabStyle(href)

  return (
    <Link
      href={href}
      className={clsx(
        'w-full cursor-pointer gap-4 rounded-lg p-3 font-bold transition duration-200 hover:bg-blue-400',
        liClassName,
      )}
    >
      <li className="flex items-center justify-center gap-2">
        <span className={clsx('text-3xl', iconClassName)}>{Icon}</span>
        {text}
      </li>
    </Link>
  )
}
