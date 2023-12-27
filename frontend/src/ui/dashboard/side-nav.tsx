'use client'

import CompanyLogo from '@/ui/company-logo'
import NavItems from '@/ui/dashboard/nav-items'

export default function SideNav() {
  return (
    <div className="h-full rounded-3xl bg-blue-theme p-3">
      <div className="flex items-center justify-center gap-2 pt-3 text-2xl">
        <CompanyLogo size={56} />
        <span className="text-zinc-100">MyCompany</span>
      </div>
      <nav className="pt-16">
        <NavItems />
      </nav>
    </div>
  )
}
