import { AppleLogo } from 'phosphor-react'

interface CompanyLogoProps {
  size: number
}

export default function CompanyLogo({ size }: CompanyLogoProps) {
  return <AppleLogo size={size} className="text-blue-theme-light" />
}
