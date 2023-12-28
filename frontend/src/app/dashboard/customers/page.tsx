import Customers from '@/app/ui/dashboard/customers'
import TableSkeleton from '@/app/ui/skeletons'

import { Suspense } from 'react'

export default async function Page() {
  return (
    <div>
      <Customers.Header />
      <Suspense
        fallback={<TableSkeleton headers={['Name', 'Email', 'Phone']} />}
      >
        <Customers.Table />
      </Suspense>
    </div>
  )
}
