import Breadcrumb from '@/app/ui/breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
}

export default function Page() {
  return (
    <div>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      Customers
    </div>
  )
}
