import CompanyLogo from '@/app/ui/common/company-logo'
import useTailwindColor from '@/app/hooks/useTailwindColor'
import IconWithText from '@/app/ui/main/Icon'

import { Heart, ShoppingCart, User } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  const getHexColor = useTailwindColor()

  return (
    <div className="mx-52 mt-8">
      <header className="flex justify-between border-b-2 py-5">
        <span className="flex items-center gap-1">
          <CompanyLogo size={40} />
          <span className="font-semibold text-blue-theme">MyCompany</span>
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
      </header>
    </div>
  )
}
