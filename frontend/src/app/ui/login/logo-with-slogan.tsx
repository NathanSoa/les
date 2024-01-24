import clsx from 'clsx'
import { Roboto_Serif as RobotoSerif } from 'next/font/google'

import CompanyLogo from '@/app/ui/common/company-logo'

const robotoSerif = RobotoSerif({
  weight: '500',
  subsets: ['latin'],
})

export default function LogoWithSlogan() {
  return (
    <>
      <h1
        className={clsx(
          'flex items-center gap-3 font-medium',
          robotoSerif.className,
        )}
      >
        <CompanyLogo size={80} className="text-indigo-800" />
        <span className="text-3xl text-indigo-800">MyCompany</span>
      </h1>
      <span className="font-medium text-slate-400">
        Tudo que você precisa num só site
      </span>
    </>
  )
}
