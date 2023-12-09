function next_step(seq: number[]): number {
	const deltas: number[][] = []
	deltas.push(seq)

	while (!deltas[deltas.length - 1].every(e => e == 0) ) {
		const prev_seq = deltas[deltas.length - 1]
		const next_seq: number[] = []
		for (let i = 0; i < prev_seq.length - 1; ++i) {
			next_seq.push(prev_seq[i + 1] - prev_seq[i])
		}
		deltas.push(next_seq)
	}

	for (let i = deltas.length - 1; i > 0; --i) {
		deltas[i - 1].unshift(deltas[i - 1][0] - deltas[i][0])
	}

	return deltas[0][0]
}

function calc_score(sequences: number[][]): number {
	return sequences.reduce((acc, seq) => {
		return acc += next_step(seq)
	}, 0)
}

console.log(calc_score([
	"0 3 6 9 12 15",
	"1 3 6 10 15 21",
	"10 13 16 21 30 45",
].map(str => str.split(" ").map(strnum => +strnum))))
