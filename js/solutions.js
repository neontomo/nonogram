const getSolutionColor = (solution) => {
	return solution === 0 ? config.colors.light : config.colors.dark;
};

const addSolutions = (direction, rowOrColumnIndex) => {
	const squareSize = getSquareSize();
	const gridOffset = height / 4;

	const values = getGridValues(direction, rowOrColumnIndex);
	const solutions = formatSolutions(values);

	for (let index = 0; index < solutions.length; index += 1) {
		const solution = solutions[index];

		const solutionPosition =
			direction === "row"
				? {
						x: gridOffset - squareSize * (solutions.length - index),
						y: gridOffset + rowOrColumnIndex * squareSize + squareSize / 2,
					}
				: {
						x: gridOffset + rowOrColumnIndex * squareSize + squareSize / 2,
						y: gridOffset - squareSize * (solutions.length - index),
					};

		fill(getSolutionColor(solution));
		strokeWeight(0);

		text(solution, solutionPosition.x, solutionPosition.y);
	}
};
