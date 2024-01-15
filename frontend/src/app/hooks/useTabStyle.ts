'use client'

import { usePathname } from 'next/navigation'

export function useTabStyle(href: string) {
  const pathname = usePathname()
  const isActualTab = verifyActualTab(href, pathname)
  const liClassName = isActualTab ? 'bg-white text-zinc-700' : 'text-zinc-50'
  const iconClassName = isActualTab ? 'text-blue-theme' : 'text-zinc-50'

  return {
    liClassName,
    iconClassName,
  }
}

function verifyActualTab(href: string, pathname: string) {
  return href === pathname || pathname.startsWith(`${href}/create`)
}
