import Breadcrumb from '@/app/ui/breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
}

export default function Page() {
  return (
    <div>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
      <div className="relative max-w-7xl overflow-x-auto rounded-xl bg-gray-100 p-2">
        <table className="mx-0 w-full text-left">
          <thead className="border-b uppercase">
            <tr>
              <th className="whitespace-nowrap bg-white p-2">Name</th>
              <th className="whitespace-nowrap bg-white p-2">E-mail</th>
              <th className="whitespace-nowrap bg-white p-2">Phone</th>
              <th className="w-80 whitespace-nowrap bg-white p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap bg-white px-2 py-5">
                <div className="flex items-center gap-5">
                  <span className="block rounded-full bg-blue-500 px-4 py-2">
                    J
                  </span>
                  John Doe
                </div>
              </td>
              <td className="whitespace-nowrap bg-white px-2 py-5">
                john@doe.com
              </td>
              <td className="whitespace-nowrap bg-white px-2 py-5">
                +1 123 456 7890
              </td>
              <td className="whitespace-nowrap bg-white py-5">
                <div className="flex justify-start gap-2">
                  <button className="rounded-xl bg-green-300 px-10 py-3">
                    Edit
                  </button>
                  <button className="rounded-xl bg-red-300 px-10 py-3">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
