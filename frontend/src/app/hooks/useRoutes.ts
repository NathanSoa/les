import { Airplay, Gear, HouseLine, User } from '@phosphor-icons/react'
import { ElementType } from 'react'

interface Route {
  path: string
  name: string
}
interface Path {
  path: string
  icon: ElementType
  label: string
}

interface Options {
  onlyStartsWith?: string
}

const IconData = {
  '/dashboard': HouseLine,
  '/dashboard/customers': User,
  '/dashboard/settings': Gear,
  fallback: Airplay,
}

const routes: Route[] = [
  { path: '/dashboard', name: 'Dashboard' },
  { path: '/dashboard/customers', name: 'Clientes' },
  { path: '/dashboard/settings', name: 'Configurações' },
]

const settingsAsLast = (a: Route, b: Route) =>
  a.name === 'Configurações' ? 1 : b.name === 'Configurações' ? -1 : 0

export const useRoutes = (options?: Options): Path[] => {
  return routes
    .sort(settingsAsLast)
    .filter((route) =>
      route.path.startsWith((options && options.onlyStartsWith) || '/'),
    )
    .map((route) => ({
      path: route.path,
      icon: IconData[route.path as keyof typeof IconData] || IconData.fallback,
      label: route.name,
    }))
}
