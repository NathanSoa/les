export function useRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

  function getColorAsBackground() {
    const backgroundColors = colors.map((color) => 'bg-' + color + '-500')
    const randomIndex = Math.floor(Math.random() * colors.length)
    return backgroundColors[randomIndex]
  }

  return { getColorAsBackground }
}
