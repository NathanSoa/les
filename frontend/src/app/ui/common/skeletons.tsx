import { twMerge } from 'tailwind-merge'
import Table from '@/app/ui/common/table'

function TableRowSkeleton() {
  const cellClassName = 'whitespace-nowrap px-2 py-5 max-w-min'
  const textPlaceholder = <div className="h-6 w-32 rounded-lg bg-gray-200" />

  return (
    <Table.Row withActions={false}>
      <td className={twMerge(cellClassName, 'flex items-center gap-5')}>
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        {textPlaceholder}
      </td>
      <td className={cellClassName}>{textPlaceholder}</td>
      <td className={cellClassName}>{textPlaceholder}</td>
      <td className="flex justify-start gap-2 whitespace-nowrap py-5">
        <div className="h-12 w-28 rounded-lg bg-gray-200" />
        <div className="h-12 w-32 rounded-lg bg-gray-200" />
      </td>
    </Table.Row>
  )
}

interface TableSkeletonProps {
  headers: string[]
  rowCount?: number
}

export default function TableSkeleton({
  rowCount,
  headers,
}: TableSkeletonProps) {
  const SKELETON_ROWS_COUNT = rowCount ?? 5

  return (
    <Table.Root>
      <Table.Header headers={headers} />
      <Table.Body>
        {Array.from({ length: SKELETON_ROWS_COUNT }).map((_, index) => (
          <TableRowSkeleton key={index} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
