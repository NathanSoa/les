import { Metadata } from 'next'

import FormRegister from '@/app/ui/login/register-form'
import LogoWithSlogan from '@/app/ui/login/logo-with-slogan'

export const metadata: Metadata = {
  title: 'Register | MyCompany',
}

export default function Page() {
  return (
    <main className={'mx-16 pt-16 font-bold'}>
      <LogoWithSlogan />
      <FormRegister />
    </main>
  )
}
