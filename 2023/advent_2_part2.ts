interface ColorMax {
	[color: string]: number
}
function as_color_max(input: string) {
	const all_opens = input.split(";")
	const maxes: ColorMax = {}
	all_opens.forEach(open => {
		const revealed = open.trim().split(",")
		revealed.forEach(what => {
			const [amount_str, color] = what.trim().split(' ')
			const amount = +amount_str
			maxes[color] = Math.max(maxes[color] || 0, amount)
		})
	})

	return maxes
}

const cmp_to: ColorMax = {
	"red": 12,
	"green": 13,
	"blue": 14
}
function is_possible(max: ColorMax): boolean {
	return Object.keys(cmp_to).every(color => {
		return (max[color] || 0) <= cmp_to[color]
	})
}

const input = [
	"3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
	"1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
	"8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
	"1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
	"6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
].map(as_color_max).map(max => Object.keys(max).reduce((acc, color) => acc *= max[color], 1)).reduce((acc, p) => acc += p, 0)

console.log(input)
