import { IconProps } from '@phosphor-icons/react'
import { AppleLogo } from '@phosphor-icons/react/dist/ssr'
import { twMerge } from 'tailwind-merge'

type CompanyLogoProps = IconProps

export default function CompanyLogo(props: CompanyLogoProps) {
  return (
    <AppleLogo
      {...props}
      className={twMerge('text-blue-theme-light', props.className)}
    />
  )
}
