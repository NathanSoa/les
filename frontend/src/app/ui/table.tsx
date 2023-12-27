import { ReactNode } from 'react'

function TableRoot({ children }: { children: ReactNode }) {
  return (
    <div className="relative max-w-7xl overflow-x-auto rounded-xl bg-gray-100 p-2">
      <table className="mx-0 w-full text-left">{children}</table>
    </div>
  )
}

interface TableHeaderProps {
  headers: string[]
}

function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead className="border-b uppercase">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="whitespace-nowrap bg-white p-2">
            {header}
          </th>
        ))}
        <th className="w-80 whitespace-nowrap bg-white p-2">Actions</th>
      </tr>
    </thead>
  )
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>
}

function TableRow({ children }: { children: ReactNode }) {
  return (
    <tr>
      {children}
      <td className="whitespace-nowrap bg-white py-5">
        <div className="flex justify-start gap-2">
          <button className="base-button border-green-500 text-green-500 hover:bg-green-600 hover:text-white">
            Edit
          </button>
          <button className="base-button border-red-500 text-red-500 hover:bg-red-700 hover:text-white">
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
}

export default Table
