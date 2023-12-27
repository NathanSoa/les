import { useRandomColor } from '@/app/hooks/useRandomColor'
import Breadcrumb from '@/app/ui/breadcrumb'
import Table from '@/app/ui/table'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customers page',
}

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
  const getRandomColor = useRandomColor()
  const cellClassName = 'whitespace-nowrap bg-white px-2 py-5'

  return (
    <div>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
      <Table.Root>
        <Table.Header headers={['Name', 'Email', 'Phone']} />
        <Table.Body>
          {customers.map((customer, index) => {
            const color = getRandomColor()
            const style = `block rounded-full px-4 py-2 ${color}`

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
