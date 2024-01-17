const colors = {
  'red-500': '#EF4444',
  'blue-500': '#3B82F6',
  'green-500': '#10B981',
  'yellow-500': '#FBBF24',
  'indigo-500': '#6366F1',
  'pink-500': '#EC4899',
  'purple-500': '#8B5CF6',
  'gray-500': '#6B7280',
  white: '#FFFFFF',
  black: '#000000',
}

const useTailwindColor = () => {
  const getHexColor = (color: keyof typeof colors) => {
    return colors[color]
  }

  return getHexColor
}

export default useTailwindColor
