'use client'

import Link from 'next/link'

interface BreadcrumbProps {
  pageName: string
  homePage: string
}

export default function Breadcrumb({ pageName, homePage }: BreadcrumbProps) {
  return (
    <div className="pb-6 text-xl">
      <Link
        href={homePage}
        className="1s text-blue-theme transition ease-in-out hover:text-blue-500"
      >
        {'Home > '}
      </Link>
      <span>{pageName}</span>
    </div>
  )
}
