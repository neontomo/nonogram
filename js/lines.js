const addLine = (direction, lineNumber) => {
	const squareSize = getSquareSize();
	const gridOffset = height / 4;
	const { colors } = config;

	strokeWeight(4);
	stroke(colors.darkest);

	const position =
		direction === "horizontal"
			? {
					x1: gridOffset + 1,
					x2: gridOffset + width / 2 - 1,
					y1: gridOffset + squareSize * lineNumber,
					y2: gridOffset + squareSize * lineNumber,
				}
			: {
					x1: gridOffset + squareSize * lineNumber,
					x2: gridOffset + squareSize * lineNumber,
					y1: gridOffset + 1,
					y2: gridOffset + width / 2 - 1,
				};
	line(position.x1, position.y1, position.x2, position.y2);
};

const addHelperLines = () => {
	addLine("horizontal", 5);
	addLine("horizontal", 10);
	addLine("horizontal", 15);
	addLine("vertical", 5);
	addLine("vertical", 10);
	addLine("vertical", 15);
};
