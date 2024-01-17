import { useHover } from '@/app/hooks/useHover'

import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconWithTextProps {
  icon: ElementType
  text: string
  color: string
  colorHoverTo?:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'indigo'
    | 'pink'
    | 'purple'
    | 'gray'
}

export default function IconWithText({
  icon: Icon,
  text,
  color,
  colorHoverTo,
}: IconWithTextProps) {
  const { getFillHover, getTextHover } = useHover()

  const textHover = getTextHover(colorHoverTo)
  const fillHover = getFillHover(colorHoverTo)

  return (
    <div className={twMerge('group flex flex-col items-center')}>
      <Icon
        size={32}
        weight="fill"
        className={twMerge(
          'transition duration-300 ease-in-out group-hover:cursor-pointer',
          fillHover,
        )}
        color={color}
      />
      <span
        className={twMerge(
          'font-semibold text-gray-500 transition duration-300 ease-in-out group-hover:cursor-pointer',
          textHover,
        )}
      >
        {text}
      </span>
    </div>
  )
}
