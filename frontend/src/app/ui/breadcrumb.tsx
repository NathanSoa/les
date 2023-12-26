'use client'

import Link from 'next/link'

interface BreadcrumbProps {
  pageName: string
  homePage: string
}

export default function Breadcrumb({ pageName, homePage }: BreadcrumbProps) {
  return (
    <div className="text-lg">
      <Link href={homePage}>{'Home > '}</Link>
      <span>{pageName}</span>
    </div>
  )
}
