'use client'

import { ReactNode } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Button from '@/app/ui/common/button'

import useTailwindColor from '@/app/hooks/useTailwindColor'

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
          <th key={index} className="w-60 whitespace-nowrap bg-white p-2">
            {header}
          </th>
        ))}
        <th className="w-80 whitespace-nowrap bg-white p-2">Ações</th>
      </tr>
    </thead>
  )
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>
}

interface TableRowProps {
  children: ReactNode
  withActions?: boolean
}

function TableRow({ children, withActions = true }: TableRowProps) {
  const getHexColor = useTailwindColor()

  const showSwal = () => {
    withReactContent(Swal)
      .fire({
        title: 'Você tem certeza?',
        text: 'Após confirmação, esta ação é irreversível!',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: getHexColor('gray-300'),
        cancelButtonText: 'Cancelar',
        confirmButtonColor: getHexColor('red-500'),
        confirmButtonText: 'Apagar',
      })
      .then((data) => {
        if (data.isConfirmed) {
          Swal.fire({
            title: 'Apagado!',
            text: 'O cliente foi apagado com sucesso.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
  }

  return (
    <tr>
      {children}
      {withActions && (
        <td className="whitespace-nowrap bg-white py-5">
          <div className="flex justify-start gap-2">
            <Button.Root className="border-green-500 text-green-500 hover:bg-green-600 hover:text-white">
              <Button.Label label="Editar" />
            </Button.Root>
            <Button.Root
              className="border-red-500 text-red-500 hover:bg-red-700 hover:text-white"
              onClick={showSwal}
            >
              <Button.Label label="Apagar" />
            </Button.Root>
          </div>
        </td>
      )}
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
