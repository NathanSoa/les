'use client'

import { UserPlus } from '@phosphor-icons/react'
import Breadcrumb from '@/app/ui/breadcrumb'
import Button from '@/app/ui/button'

export default function CustomersHeader() {
  return (
    <>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <div className="flex max-w-7xl justify-between">
        <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
        <Button.Root
          className="m-2 flex items-center justify-center gap-2 border-blue-theme px-4 py-1 text-blue-theme hover:bg-blue-800 hover:text-white"
          onClick={() => console.log('asdjkfajsdfjasfasjsdkf')}
        >
          <Button.Icon icon={<UserPlus size={32} />} />
          <Button.Label label="Create customer" />
        </Button.Root>
      </div>
    </>
  )
}
