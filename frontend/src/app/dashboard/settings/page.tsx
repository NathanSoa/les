import Breadcrumb from '@/app/ui/breadcrumb'

export default function Page() {
  return (
    <div>
      <Breadcrumb pageName={'Settings'} homePage="/dashboard" />
      <h1>Settings</h1>
    </div>
  )
}
