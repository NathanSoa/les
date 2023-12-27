export function useRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

  function getColor() {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return `bg-${colors[randomIndex]}-500`
  }

  return getColor
}
