const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-teal-500',
  'bg-fuchsia-500',
]

const lastSelectedColorIndex: number[] = []

export function useRandomColor() {
  function getColorAsBackground() {
    let randomIndex = getRandomIndex()

    while (isPastTwoColor(randomIndex)) {
      randomIndex = getRandomIndex()
    }

    addColorToLastSelected(randomIndex)

    return colors[randomIndex]
  }

  return { getColorAsBackground }
}

const isPastTwoColor = (index: number) =>
  lastSelectedColorIndex.find((i) => i === index) !== undefined

const getRandomIndex = () => Math.floor(Math.random() * colors.length)

const addColorToLastSelected = (index: number) => {
  lastSelectedColorIndex.push(index)

  if (lastSelectedColorIndex.length > 2) {
    lastSelectedColorIndex.shift()
  }
}
