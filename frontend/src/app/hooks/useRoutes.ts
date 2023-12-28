import { Airplay, Gear, HouseLine, User } from '@phosphor-icons/react'
import { ElementType, useEffect, useState } from 'react'

import { getRoutes } from '@/app/server/getRoutes'
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

const settingsAsLast = (a: Route, b: Route) =>
  a.name === 'Settings' ? 1 : b.name === 'Settings' ? -1 : 0

export const useRoutes = (options?: Options): Path[] => {
  const [routes, setRoutes] = useState<Route[]>([])

  useEffect(() => {
    getRoutes().then((data) => setRoutes(data))
  }, [])

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
