enum Direction {
	Left = 0,
	Right = 1
}
const directions: { [k: string]: Direction } = {
	'L': Direction.Left,
	'R': Direction.Right
}

function get_next(sequence: Direction[], step: number): Direction {
	return sequence[step % sequence.length]
}

type Entry = [number, number, boolean]

function get_fast_tree(tree: Record<string, string[]>): [Entry[], Entry[]] {
	const keys = Object.keys(tree)

	const fast_tree = keys.map(node => {
		const dirs = tree[node]
		const entry: Entry = [
			keys.indexOf(dirs[Direction.Left]),
			keys.indexOf(dirs[Direction.Right]),
			node.endsWith('Z')
		]
		return entry
	})
	const start_at = keys.filter(node => node.endsWith('A')).map(node => fast_tree[keys.indexOf(node)])

	return [
		start_at,
		fast_tree
	]
}

function factors(n: number): { [k: number]: number } {
	const factors: { [k: number]: number } = {}
	let divisor = 2

	while (n >= 2) {
		if (n % divisor == 0) {
			factors[divisor] = (factors[divisor] || 0) + 1
			n = n / divisor
		}
		else {
			divisor++
		}
	}
	return factors
}

function mbk(nums: number[]) {
	const collected: { [k: number]: number } = {}

	nums.map(n => factors(n)).forEach(divisors => {
		Object.keys(divisors).forEach(d => {
			const power = divisors[d]
			collected[d] = Math.max(power, collected[d] || 0)
		})
	})

	return Object.keys(collected).reduce((acc, divisor) => {
		const power = collected[divisor]
		return acc *= Math.pow(+divisor, power)
	}, 1)
}

function count_steps(sequence_str: string, tree: Record<string, string[]>): number {
	const steps = []
	const sequence = sequence_str.split('').map(d => directions[d])
	const [current, fast_tree] = get_fast_tree(tree)

	current.forEach(c => {
		let step = 0
		while (!c[2]) {
			const next = get_next(sequence, step)
			c = fast_tree[c[next]]
			++step
		}

		steps.push(step)
	})

	return mbk(steps)
}

const sequence = 'LR'
const tree = {
    "11A": ["11B", "XXX"],
    "11B": ["XXX", "11Z"],
    "11Z": ["11B", "XXX"],
    "22A": ["22B", "XXX"],
    "22B": ["22C", "22C"],
    "22C": ["22Z", "22Z"],
    "22Z": ["22B", "22B"],
    "XXX": ["XXX", "XXX"],
}

console.log(count_steps(sequence, tree))
