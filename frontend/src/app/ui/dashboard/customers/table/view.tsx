'use client'

import clsx from 'clsx'

import Table from '@/app/ui/common/table'

import { useRandomColor } from '@/app/hooks/useRandomColor'

interface CustomersTableProps {
  customers: {
    name: string
    email: string
    phone: string
  }[]
}

export default function CustomersTableView({ customers }: CustomersTableProps) {
  const cellClassName = 'whitespace-nowrap bg-white px-2 py-5'
  const truncateStyle = 'w-40 truncate'
  const { getColorAsBackground } = useRandomColor()

  return (
    <Table.Root>
      <Table.Header headers={['Nome', 'Email', 'Telefone']} />
      <Table.Body>
        {customers.map((customer, index) => {
          const style = clsx(
            'block rounded-full px-4 py-2 text-white',
            getColorAsBackground(),
          )

          return (
            <Table.Row key={index} withActions>
              <td className={cellClassName}>
                <div className="flex items-center gap-5">
                  <span className={style}>{customer.name[0]}</span>
                  <div className={truncateStyle}>{customer.name}</div>
                </div>
              </td>
              <td className={cellClassName}>
                <div className={truncateStyle}>{customer.email}</div>
              </td>
              <td className={cellClassName}>{customer.phone}</td>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
