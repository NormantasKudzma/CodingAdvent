function inflate(what: string[]) {
	const inflated: string[][] = []
	what.map(row => row.split("")).forEach(row => {
		inflated.push(row)
		if (row.every(x => x == '.')) {
			inflated.push(JSON.parse(JSON.stringify(row)))
		}
	})

	for (let i = inflated[0].length; i >= 0; --i) {
		if (inflated.every(row => row[i] == '.')) {
			for (let j = 0; j < inflated.length; ++j) {
				inflated[j].splice(i, 0, '.')
			}
		}
	}

	return inflated
}

interface Point {
	x: number,
	y: number
}

function as_points(inflated: string[][]): Point[] {
	const points: Point[] = []
	for (let y = 0; y < inflated.length; ++y) {
		for (let x = 0; x < inflated[0].length; ++x) {
			if (inflated[y][x] == "#") {
				points.push({
					x: x,
					y: y
				})
			}
		}
	}
	return points
}

const universe_scale = 1000000
function dist(big_step_rows: number[], big_step_cols: number[], a: Point, b: Point): number {	
	let dist = 0

	const dx = Math.sign(b.x - a.x)
	for (let x = a.x; x != b.x; x += dx) {
		if (big_step_cols.includes(x)) {
			dist += universe_scale
		}
		else {
			dist += 1
		}
	}
	
	const dy = Math.sign(b.y - a.y)
	for (let y = a.y; y != b.y; y += dy) {
		if (big_step_rows.includes(y)) {
			dist += universe_scale
		}
		else {
			dist += 1
		}
	}

	return dist
}

function min_dists(input: string[][]): number[] {
	const points = as_points(input)
	const big_steps_rows: number[] = []
	const big_steps_cols: number[] = []
	
	for (let y = 0; y < input.length; ++y) {
		const row = input[y]
		if (row.every(e => e == '.')) {
			big_steps_rows.push(y)
		}

	}

	for (let x = 0; x < input[0].length; ++x) {
		if (input.every(row => row[x] == '.')) {
			big_steps_cols.push(x)
		}
	}

	const dists: number[] = []
	for (let i = 0; i < points.length; ++i) {
		for (let j = i + 1; j < points.length; ++j) {
			dists.push(dist(big_steps_rows, big_steps_cols, points[i], points[j]))
		}
	}

	return dists
}

const input = [
	"...#......",
	".......#..",
	"#.........",
	"..........",
	"......#...",
	".#........",
	".........#",
	"..........",
	".......#..",
	"#...#.....",
].map(row => row.split(""))

console.log(min_dists(input).reduce((acc, d) => { return acc += d}, 0))
