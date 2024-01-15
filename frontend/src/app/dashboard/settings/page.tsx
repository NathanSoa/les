import Breadcrumb from '@/app/ui/breadcrumb'

export default function Page() {
  return (
    <div>
      <Breadcrumb
        pages={[
          { label: 'Ínicio', href: '/dashboard' },
          {
            label: 'Configurações',
            href: '/dashboard/settings',
            activePage: true,
          },
        ]}
      />
      <h1>Settings</h1>
    </div>
  )
}
