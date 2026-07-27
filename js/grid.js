const gridSize = 20
let grid // needs to be a `let` to allow re-assigning

grid = []

for (let index = 0; index < gridSize; index += 1) {
  grid.push(new Array(gridSize).fill(0))
}

const drawBoard = () => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < grid.length; columnIndex += 1) {
      cellUtils.drawCell(rowIndex, columnIndex)
    }
  }
}

const getGridValues = (direction = 'row', index) => {
  if (direction === 'row') {
    return grid[index]
  } else if (direction === 'column') {
    return grid.map((row) => row[index])
  }
}

const formatSolutions = (array) => {
  const result = array
    ?.join(' ')
    ?.split('0')
    ?.map((group) => {
      let result = 0

      // create an array with ones. ex: [1, 1, 1]
      const arrayOfOnes = group.split(' ')

      // add up all the trues. ex: 1, 1, 1 => 3
      arrayOfOnes?.forEach((oneString) => {
        result += Number(oneString)
      })

      return result
    })
    // remove single 0s
    ?.filter((item) => item > 0)

  return result.length ? result : [0]
}

const getSquareSize = () => {
  return width / 2 / grid.length
}
