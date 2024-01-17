const groupTextColors = {
  red: 'group-hover:text-red-500',
  blue: 'group-hover:text-blue-500',
  green: 'group-hover:text-green-500',
  yellow: 'group-hover:text-yellow-500',
  indigo: 'group-hover:text-indigo-500',
  pink: 'group-hover:text-pink-500',
  purple: 'group-hover:text-purple-500',
  gray: 'group-hover:text-gray-600',
}

const groupFillColors = {
  red: 'group-hover:fill-red-500',
  blue: 'group-hover:fill-blue-500',
  green: 'group-hover:fill-green-500',
  yellow: 'group-hover:fill-yellow-500',
  indigo: 'group-hover:fill-indigo-500',
  pink: 'group-hover:fill-pink-500',
  purple: 'group-hover:fill-purple-500',
  gray: 'group-hover:fill-gray-600',
}

export const useHover = () => {
  const getTextHover = (color?: keyof typeof groupTextColors) => {
    if (!color) return
    return groupTextColors[color]
  }

  const getFillHover = (color?: keyof typeof groupFillColors) => {
    if (!color) return
    return groupFillColors[color]
  }

  return { getTextHover, getFillHover }
}
