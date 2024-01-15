'use client'

import Breadcrumb from '@/app/ui/breadcrumb'
import CustomerCreateForm from '@/app/ui/dashboard/customers/create-form'

export default function Page() {
  return (
    <>
      <Breadcrumb
        pages={[
          { label: 'Home', href: '/dashboard' },
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create customer',
            href: '/dashboard/customers/create',
            activePage: true,
          },
        ]}
      />
      <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
      <CustomerCreateForm close={() => console.log('a')} />
    </>
  )
}
