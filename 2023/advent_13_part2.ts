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

function is_eq_or_smudge(a: string, b: string): { equal: boolean, fixed_smudge?: boolean } {
	let fixed_smudge = false

	for (let i = 0; i < a.length; ++i) {
		if (a.charAt(i) == b.charAt(i)) {
			continue
		}

		if (!fixed_smudge) {
			fixed_smudge = true
			continue
		}

		return { equal: false }
	}

	return { equal: true, fixed_smudge }
}

function find_mirror(lines: string[]): number | undefined {
	for (let i = 0; i < lines.length - 1; ++i) {
		if (lines[i] == lines[i + 1]) {
			let ii = i - 1
			let jj = i + 1 + 1
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

function find_mirror_smudge(lines: string[], not_this: number): number | undefined {
	let fixed_smudge = false
	for (let i = 0; i < lines.length - 1; ++i) {
		let eq = is_eq_or_smudge(lines[i], lines[i + 1])
		if (eq.equal) {
			fixed_smudge = eq.fixed_smudge
			if (i + 1 == not_this) { continue }

			let ii = i - 1
			let jj = i + 1 + 1
			let is_mirror = true

			while (ii >= 0 && jj < lines.length) {
				eq = is_eq_or_smudge(lines[ii], lines[jj])
				if (fixed_smudge && eq.fixed_smudge) { is_mirror = false }

				is_mirror &&= eq.equal
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
	const aa = find_mirror_smudge(rotate(lines), a)

	const b = find_mirror(lines)
	const bb = find_mirror_smudge(lines, b)

	if (aa > 0 && bb > 0) {
		throw 'wtff'
	}

	if (aa > 0) { return aa }
	if (bb > 0) { return bb * 100 }

	throw 'wtf'
})

console.log(scores)
console.log(scores.reduce((acc, v) => acc += v, 0))

