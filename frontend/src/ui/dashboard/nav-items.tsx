import { useRoutes } from '@/hooks/useRoutes'
import NavItem from '@/ui/dashboard/nav-item'

export default function NavItems() {
  const routes = useRoutes({ onlyStartsWith: '/dashboard' })

  return (
    <ul className="flex w-full flex-col items-center gap-5">
      {routes.map(({ path, label, icon: Icon }) => (
        <NavItem key={path} href={path} text={label} icon={<Icon />} />
      ))}
    </ul>
  )
}
