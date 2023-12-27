'use client'

import { useRandomColor } from '@/app/hooks/useRandomColor'
import Breadcrumb from '@/app/ui/breadcrumb'
import Button from '@/app/ui/button'
import Table from '@/app/ui/table'

import clsx from 'clsx'
import { UserPlus } from 'phosphor-react'

const customers = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Jane Doe',
    email: 'ads@fds',
    phone: '+1 123 456 7890',
  },
]

export default function Page() {
  const cellClassName = 'whitespace-nowrap bg-white px-2 py-5'
  const { getColorAsBackground } = useRandomColor()

  return (
    <div>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <div className="flex max-w-7xl justify-between">
        <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
        <Button.Root className="m-2 flex items-center justify-center gap-2 border-blue-theme px-4 py-1 text-blue-theme hover:bg-blue-800 hover:text-white">
          <Button.Icon icon={<UserPlus size={32} />} />
          <Button.Label label="Create customer" />
        </Button.Root>
      </div>
      <Table.Root>
        <Table.Header headers={['Name', 'Email', 'Phone']} />
        <Table.Body>
          {customers.map((customer, index) => {
            const style = clsx(
              'block rounded-full px-4 py-2 text-white',
              getColorAsBackground(),
            )

            return (
              <Table.Row key={index}>
                <td className={cellClassName}>
                  <div className="flex items-center gap-5">
                    <span className={style}>{customer.name[0]}</span>
                    {customer.name}
                  </div>
                </td>
                <td className={cellClassName}>{customer.email}</td>
                <td className={cellClassName}>{customer.phone}</td>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
