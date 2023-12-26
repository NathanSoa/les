import { CircleDollarSignIcon } from 'lucide-react'

interface CompanyLogoProps {
  size: number
}

export default function CompanyLogo({ size }: CompanyLogoProps) {
  return <CircleDollarSignIcon size={size} className="text-blue-theme-light" />
}
