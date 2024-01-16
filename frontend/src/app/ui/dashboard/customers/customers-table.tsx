import clsx from 'clsx'
import Table from '@/app/ui/common/table'
import { useRandomColor } from '@/app/hooks/useRandomColor'

const dbCustomers = [
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
  {
    name: 'Jane Doeasdasdasdasdasdadadasdasdasdasdasda',
    email: 'ads@fdsasddddddddddddddddddddddddddddddddasd',
    phone: '+1 123 456 7890',
  },
]

const getCustomer = async (): Promise<typeof dbCustomers> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dbCustomers)
    }, 4000)
  })
}

export default async function CustomersTable() {
  const costumers = await getCustomer()

  const cellClassName = 'whitespace-nowrap bg-white px-2 py-5'
  const truncateStyle = 'w-40 truncate'
  const { getColorAsBackground } = useRandomColor()

  return (
    <Table.Root>
      <Table.Header headers={['Nome', 'Email', 'Telefone']} />
      <Table.Body>
        {costumers.map((customer, index) => {
          const style = clsx(
            'block rounded-full px-4 py-2 text-white',
            getColorAsBackground(),
          )

          return (
            <Table.Row key={index}>
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
