import { ReactNode } from 'react'

import MainNavigation from '@/app/ui/main/main-navigation'

type LayoutProps = {
  children: ReactNode
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <div className="h-full bg-slate-50 text-center">{children}</div>
    </>
  )
}
