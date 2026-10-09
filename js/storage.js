const storage = {
	update: () => storeItem("grid", grid),
	get: () => getItem("grid"),
	clear: () => {
		grid = grid.map((row) => row.map(() => 0));
		// local storage will automatically update
	},
	import: (json) => {
		if (json && json.length > 1) grid = json;
	},
	export: () => {
		const filename = prompt("filename?", "grid");
		if (!filename) return;

		const url = URL.createObjectURL(
			new Blob([JSON.stringify(grid, null, 2)], { type: "application/json" }),
		);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${filename}.json`;
		link.click();

		URL.revokeObjectURL(url);
	},
};
