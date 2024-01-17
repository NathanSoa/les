import CompanyLogo from '@/app/ui/common/company-logo'
import useTailwindColor from '@/app/hooks/useTailwindColor'
import IconWithText from '@/app/ui/main/Icon'

import { Heart, List, ShoppingCart, User } from '@phosphor-icons/react/dist/ssr'
import { Roboto_Condensed as RobotoCondensed } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { ReactNode } from 'react'

const roboto = RobotoCondensed({ subsets: ['latin'], weight: '700' })

type LayoutProps = {
  children: ReactNode
}
export default function RootLayout({ children }: LayoutProps) {
  const getHexColor = useTailwindColor()

  return (
    <div className="mx-52 mt-8">
      <header>
        <div className="flex justify-between border-b-2 py-5">
          <span className="flex items-center gap-1">
            <CompanyLogo size={54} />
            <span className="text-xl font-semibold text-blue-theme">
              MyCompany
            </span>
          </span>
          <div className="flex gap-8">
            <IconWithText
              color={getHexColor('gray-500')}
              icon={User}
              text="Perfil"
              colorHoverTo="gray"
            />
            <IconWithText
              color={getHexColor('gray-500')}
              icon={Heart}
              text="Favoritos"
              colorHoverTo="gray"
            />
            <IconWithText
              color={getHexColor('gray-500')}
              icon={ShoppingCart}
              text="Carrinho"
              colorHoverTo="gray"
            />
          </div>
        </div>
        <nav className="flex items-center justify-between pt-6">
          <ul className="flex gap-8">
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-gray-700">
              <List size={20} weight="fill" />
              Categorias
            </li>
            <li className="text-lg font-semibold text-gray-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-gray-700">
              <Link href="deals">Ofertas</Link>
            </li>
            <li className="text-lg font-semibold text-gray-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-gray-700">
              <Link href="bestsellers">Mais vendidos</Link>
            </li>
            <li className="text-lg font-semibold text-gray-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-gray-700">
              <Link href="contact">Contato</Link>
            </li>
          </ul>
          <span
            className={twMerge(
              roboto.className,
              'text-2xl font-bold text-gray-800',
            )}
          >
            Tudo o que você precisa em um só lugar!
          </span>
        </nav>
      </header>
      {children}
    </div>
  )
}
