import Breadcrumb from '@/app/ui/breadcrumb'
import Table from '@/app/ui/table'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
}

export default function Page() {
  const cellClassName = 'whitespace-nowrap bg-white px-2 py-5'

  return (
    <div>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
      <Table.Root>
        <Table.Header headers={['Name', 'Email', 'Phone']} />
        <Table.Body>
          <td className={cellClassName}>
            <div className="flex items-center gap-5">
              <span className="block rounded-full bg-blue-500 px-4 py-2">
                J
              </span>
              John Doe
            </div>
          </td>
          <td className={cellClassName}>john@doe.com</td>
          <td className={cellClassName}>+1 123 456 7890</td>
        </Table.Body>
      </Table.Root>
    </div>
  )
}
