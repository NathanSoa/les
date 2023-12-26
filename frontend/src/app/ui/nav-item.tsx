import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

interface NavItemProps {
  href: string
  text: string
  icon: ElementType
}

export default function NavItem({ href, text, icon: Icon }: NavItemProps) {
  const pathname = usePathname()

  return (
    <li className="flex gap-5 text-zinc-50">
      <Icon />
      <a href={href}>{text}</a>
    </li>
  )
}
