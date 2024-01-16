'use client'

import Breadcrumb from '@/app/ui/common/breadcrumb'
import Button from '@/app/ui/common/button'

import { UserPlus } from '@phosphor-icons/react'
import Link from 'next/link'

export default function CustomersHeader() {
  return (
    <>
      <Breadcrumb
        pages={[
          { label: 'Ínicio', href: '/dashboard' },
          {
            label: 'Clientes',
            href: '/dashboard/customers',
            activePage: true,
          },
        ]}
      />
      <div className="flex max-w-7xl justify-between">
        <h1 className="pb-6 pt-2 text-4xl font-bold">Clientes</h1>
        <Link href="/dashboard/customers/create">
          <Button.Root className="m-2 flex items-center justify-center gap-2 border-blue-theme px-4 py-1 text-blue-theme hover:bg-blue-800 hover:text-white">
            <Button.Icon icon={<UserPlus size={32} />} />
            <Button.Label label="Criar cliente" />
          </Button.Root>
        </Link>
      </div>
    </>
  )
}
