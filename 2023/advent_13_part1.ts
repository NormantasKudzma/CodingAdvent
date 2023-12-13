function rotate(lines: string[]): string[] {
	const rot: string[] = []
	for (let x = 0; x < lines[0].length; ++x) {
		let result = ''
		for (let y = 0; y < lines.length; ++y) {
			result += lines[y].charAt(x)
		}
		rot.push(result)
	}
	return rot
}

function find_mirror(lines: string[]): number | undefined {
	for (let i = 0; i < lines.length - 1; ++i) {
		if (lines[i] == lines[i + 1]) {
			let ii = i
			let jj = i + 1
			let is_mirror = true

			while (ii >= 0 && jj < lines.length) {
				is_mirror &&= (lines[ii] == lines[jj])
				--ii
				++jj
			}

			if (is_mirror) {
				return i + 1
			}
		}
	}

	return 0
}

const input = [
	[
		"#.##..##.",
		"..#.##.#.",
		"##......#",
		"##......#",
		"..#.##.#.",
		"..##..##.",
		"#.#.##.#.",
	],
	[
		"#...##..#",
		"#....#..#",
		"..##..###",
		"#####.##.",
		"#####.##.",
		"..##..###",
		"#....#..#",
	]
]

const scores = input.map(lines => {
	const a = find_mirror(rotate(lines))

	const b = find_mirror(lines)
	if (a > 0 && b > 0)
	{
		throw 'wtff'
	}

	if (a > 0) { return a }
	if (b > 0) { return b * 100 }

	throw 'wtf'
})

console.log(scores)
console.log(scores.reduce((acc, v) => acc += v, 0))

