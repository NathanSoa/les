import { IconProps } from '@phosphor-icons/react'
import { AppleLogo } from '@phosphor-icons/react/dist/ssr'

type CompanyLogoProps = IconProps

export default function CompanyLogo(props: CompanyLogoProps) {
  return <AppleLogo {...props} className="text-blue-theme-light" />
}
