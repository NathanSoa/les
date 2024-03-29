import { ReactNode } from 'react'

export default function InfoCard({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2 flex flex-col gap-1 border-2 bg-slate-50 p-2">
      {children}
    </div>
  )
}
