import type { Metadata } from 'next'

import SideNav from '@/ui/dashboard/side-nav'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-app pt-5">
      <div className="p-3">
        <SideNav />
      </div>
      <main className="px-5 py-6">{children}</main>
    </div>
  )
}
