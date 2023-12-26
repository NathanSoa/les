import { HouseLine, User } from 'phosphor-react'
import { ElementType } from 'react'

interface Path {
  path: string
  icon: ElementType
  label: string
}

export const useRoutes = (): Path[] => {
  return [
    {
      path: '/dashboard',
      icon: HouseLine,
      label: 'Dashboard',
    },
    {
      path: '/dashboard/customers',
      icon: User,
      label: 'Customers',
    },
  ]
}
