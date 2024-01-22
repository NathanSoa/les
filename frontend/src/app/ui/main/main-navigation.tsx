'use client'
import CompanyLogo from '@/app/ui/common/company-logo'
import IconWithText from '@/app/ui/main/Icon'
import CategoriesSidebar from '@/app/ui/main/categories-sidebar'

import useTailwindColor from '@/app/hooks/useTailwindColor'
import { useModal } from '@/app/hooks/useModal'

import { Heart, List, ShoppingCart, User } from '@phosphor-icons/react/dist/ssr'
import { Roboto_Condensed as RobotoCondensed } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

const roboto = RobotoCondensed({ subsets: ['latin'], weight: '700' })

export default function MainNavigation() {
  const getHexColor = useTailwindColor()

  const {
    closeModal: closeSidebar,
    openModal: openSidebar,
    isOpen,
  } = useModal()
  return (
    <>
      <CategoriesSidebar isOpen={isOpen} onClose={closeSidebar} />
      <div className="mx-52 mt-8 pb-5">
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
              <li className="text-lg font-semibold text-gray-500 transition duration-300 ease-in-out hover:cursor-pointer hover:text-gray-700">
                <button
                  className="flex items-center gap-2"
                  onClick={() => openSidebar()}
                >
                  <List size={20} weight="fill" />
                  Categorias
                </button>
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
      </div>
    </>
  )
}
