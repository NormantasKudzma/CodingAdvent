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

function dist(a: Point, b: Point): number {
	return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
}

function min_dists(points: Point[]): number[] {
	const dists: number[] = []
	for (let i = 0; i < points.length; ++i) {
		for (let j = i + 1; j < points.length; ++j) {
			dists.push(dist(points[i], points[j]))
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
]

const points = as_points(inflate(input))
console.log(min_dists(points).reduce((acc, d) => { return acc += d}, 0))
