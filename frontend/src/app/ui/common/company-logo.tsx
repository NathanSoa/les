import { AppleLogo } from '@phosphor-icons/react/dist/ssr'

interface CompanyLogoProps {
  size: number
}

export default function CompanyLogo({ size }: CompanyLogoProps) {
  return <AppleLogo size={size} className="text-blue-theme-light" />
}
