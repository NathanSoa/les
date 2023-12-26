'use client'

import { useRoutes } from '@/app/hooks/useRoutes'
import CompanyLogo from '@/app/ui/company-logo'
import NavItem from '@/app/ui/dashboard/nav-item'

export default function SideNav() {
  const routes = useRoutes()

  return (
    <div className="h-full rounded-3xl bg-blue-theme p-3">
      <div className="flex justify-center gap-2 pt-3 text-2xl">
        <CompanyLogo size={32} />
        <span className="text-zinc-100">MyCompany</span>
      </div>

      <nav className="pt-16">
        <ul className="flex w-full flex-col items-center gap-5">
          {routes.map(({ path, label, icon: Icon }) => (
            <NavItem key={path} href={path} text={label} icon={<Icon />} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
