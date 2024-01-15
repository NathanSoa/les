'use client'

import clsx from 'clsx'
import Link from 'next/link'
interface BreadcrumbProps {
  label: string
  href: string
  activePage?: boolean
}

interface NewBreadcrumbProps {
  pages: BreadcrumbProps[]
}

export default function Breadcrumb({ pages }: NewBreadcrumbProps) {
  return (
    <div className="pb-6 text-xl">
      {pages.map((page, index) => {
        return (
          <span key={index}>
            <Link
              href={page.href}
              className={clsx(
                !page.activePage &&
                  '1s text-blue-theme transition ease-in-out hover:text-blue-500',
              )}
            >
              {page.label} {!page.activePage ? ' > ' : ''}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
