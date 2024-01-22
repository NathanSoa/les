import { ReactNode } from 'react'
type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="grid-cols-login grid">
      {children}
      <aside className="h-screen bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-800 text-zinc-50">
        <div className="flex flex-col items-center pt-80">
          <span className="pb-3 text-lg text-zinc-200">
            É bom te ver por aqui
          </span>
          <span className="flex flex-col items-center text-center text-7xl">
            SEJA MUITO BEM-VINDO
            <div className="mt-4 h-2 w-16 rounded-full bg-white" />
          </span>
        </div>
      </aside>
    </div>
  )
}
