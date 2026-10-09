let hideSolution = false;

function setup() {
	createCanvas(windowHeight, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(config.textSize);
	textStyle(BOLD);

	const importButton = createFileInput((file) => {
		if (file.subtype !== "json") return;
		storage.import(file.data);
	});
	importButton.position(10, 10);

	const exportButton = createButton("export");
	exportButton.position(10, 10 + 35);
	exportButton.mousePressed(storage.export);

	const clearButton = createButton("clear");
	clearButton.position(10, 10 + 35 * 2);
	clearButton.mousePressed(storage.clear);

	const hideSolutionToggle = createCheckbox(" hide solution");
	hideSolutionToggle.position(10, 10 + 35 * 3);
	hideSolutionToggle.mousePressed(() => {
		hideSolution = !hideSolution;
	});

	const storedGrid = storage.get();
	if (storedGrid) grid = storedGrid;
}

function draw() {
	background("white");
	drawBoard();

	for (let index = 0; index < grid.length; index += 1) {
		addSolutions("row", index);
		addSolutions("column", index);
	}

	addHelperLines();
	storage.update();
}

function mouseClicked() {
	for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
		for (let columnIndex = 0; columnIndex < grid.length; columnIndex += 1) {
			const cellBoundary = cellUtils.getCellBoundary(rowIndex, columnIndex);

			if (cellUtils.isInBounds(mouseX, mouseY, cellBoundary)) {
				cellUtils.toggleCell(rowIndex, columnIndex);
			}
		}
	}
}

function windowResized() {
	resizeCanvas(windowHeight, windowHeight);
}
