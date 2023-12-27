export function useRandomColor() {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
  ]

  let lastSelectedColorIndex = -1

  function getColorAsBackground() {
    let randomIndex = Math.floor(Math.random() * colors.length)
    while (randomIndex === lastSelectedColorIndex) {
      randomIndex = Math.floor(Math.random() * colors.length)
    }
    lastSelectedColorIndex = randomIndex
    return colors[randomIndex]
  }

  return { getColorAsBackground }
}
