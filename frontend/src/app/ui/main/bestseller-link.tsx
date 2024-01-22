import { useNormalizer } from '@/app/hooks/useNormalizer'

import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface BestsellerLinkProps {
  product: string
  closeSidebar: () => void
}

export default function BestsellerLink({
  product,
  closeSidebar,
}: BestsellerLinkProps) {
  const { toKebabCase } = useNormalizer()

  return (
    <li>
      <Link
        href={`/products/${toKebabCase(product)}`}
        className="flex items-center justify-between"
        onClick={closeSidebar}
      >
        {product} <CaretRight />
      </Link>
    </li>
  )
}
