'use client'

import CompanyLogo from '@/app/ui/company-logo'
import NavItem from '@/app/ui/nav-item'

import { HouseLine, User } from 'phosphor-react'

export default function SideNav() {
  return (
    <div className="h-full rounded-3xl bg-blue-theme p-3">
      <div className="flex justify-center gap-2 pt-3 text-2xl">
        <CompanyLogo size={32} />
        <span className="text-zinc-100">MyCompany</span>
      </div>

      <nav className="pt-16">
        <ul className="flex w-full flex-col items-center gap-5">
          <NavItem href="/dashboard" text="Dashboard" icon={<HouseLine />} />
          <NavItem href="/customers" text="Customers" icon={<User />} />
        </ul>
      </nav>
    </div>
  )
}
