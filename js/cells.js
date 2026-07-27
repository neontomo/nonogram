const cellUtils = {
  isCellEnabled: (rowIndex, columnIndex) => {
    return grid[rowIndex][columnIndex] === 1
  },
  enableCell: (rowIndex, columnIndex) => {
    grid[rowIndex][columnIndex] = 1
  },
  disableCell: (rowIndex, columnIndex) => {
    grid[rowIndex][columnIndex] = 0
  },
  toggleCell: (rowIndex, columnIndex) => {
    const previousValue = grid[rowIndex][columnIndex]
    grid[rowIndex][columnIndex] = previousValue === 0 ? 1 : 0
  },
  getCellBoundary: (rowIndex, columnIndex) => {
    const { offset } = config
    const squareSize = getSquareSize()
    const gridOffset = height / 4

    return {
      top: gridOffset + squareSize * rowIndex,
      right: gridOffset + squareSize * columnIndex + squareSize,
      bottom: gridOffset + squareSize * rowIndex + squareSize,
      left: gridOffset + squareSize * columnIndex
    }
  },
  isInBounds: (mouseX, mouseY, cellBoundary) => {
    const inBounds =
      mouseX > cellBoundary.left &&
      mouseX < cellBoundary.right &&
      mouseY > cellBoundary.top &&
      mouseY < cellBoundary.bottom
    if (inBounds) return true
  },
  drawCell: (rowIndex, columnIndex) => {
    const { colors, offset } = config
    const squareSize = getSquareSize()
    const isFilled = cellUtils.isCellEnabled(rowIndex, columnIndex)
    const color = isFilled ? colors.dark : colors.light
    const gridOffset = height / 4

    const position = {
      x: gridOffset + columnIndex * squareSize,
      y: gridOffset + rowIndex * squareSize,
      w: squareSize,
      h: squareSize
    }

    fill(color)
    strokeWeight(2)
    stroke(colors.darkest)
    rect(position.x, position.y, position.w, position.h)
  }
}
