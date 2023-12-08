enum Direction {
    Left = 0,
    Right = 1
}
const directions: { [k: string]: Direction } = {
    'L': Direction.Left,
    'R': Direction.Right
}

function get_next(sequence: string, step: number): Direction {
    return directions[sequence.charAt(step % sequence.length)]
}

function count_steps(sequence: string, tree: Record<string, string[]>): number {
    let steps = 0
    let current = 'AAA'
    while (current != 'ZZZ') {
        const next = get_next(sequence, steps)
        current = tree[current][next]
        ++steps
    }

    return steps
}

const sequence = 'LLR'
const tree = {
    "AAA": ["BBB", "BBB"],
    "BBB": ["AAA", "ZZZ"],
    "ZZZ": ["ZZZ", "ZZZ"],
}

console.log(count_steps(sequence, tree))
