import { UserCircle, X } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'

interface CategoriesSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CategoriesSidebar({
  isOpen,
  onClose,
}: CategoriesSidebarProps) {
  return (
    <>
      <div
        className={clsx(
          'absolute inset-0 bg-black opacity-30 transition-opacity duration-500',
          isOpen ? 'visible' : 'invisible',
        )}
      />
      <div
        className={clsx(
          'absolute left-0 top-0 z-50 h-full w-[30rem] bg-zinc-200',
          !isOpen && '-translate-x-full',
          isOpen && 'translate-x-0',
          'transition duration-300 ease-in-out',
        )}
      >
        <div className="flex items-center justify-between bg-blue-theme p-5 text-white">
          <Link
            className="flex items-center gap-2 hover:cursor-pointer"
            href="/login"
          >
            <UserCircle size={32} />
            <span className="text-lg">Bem-vindo, faça seu login</span>
          </Link>
          <X size={40} onClick={onClose} className="hover:cursor-pointer" />
        </div>
      </div>
    </>
  )
}
