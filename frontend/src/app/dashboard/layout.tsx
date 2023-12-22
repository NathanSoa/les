import type { Metadata } from 'next'

import SideNav from '@/app/ui/dashboard/side-nav'

export const metadata: Metadata = {
  title: 'Dashboard | MyApplication',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid-cols-app grid min-h-screen pt-5">
      <div className="p-3">
        <SideNav />
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  )
}
