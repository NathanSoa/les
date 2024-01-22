import GoogleSvg from '@/public/google-logo.svg'

import Button from '@/app/ui/common/button'

import Image from 'next/image'

export default function GoogleButton() {
  return (
    <Button.Root className="flex w-full items-center justify-center gap-3 border-2 border-slate-500 text-slate-500 hover:border-slate-900 hover:text-slate-900">
      <Button.Icon icon={<Image src={GoogleSvg} alt="Google Logo" />} />
      <Button.Label label="Entrar com Google" />
    </Button.Root>
  )
}
