export const compare = (n: number, v: number, x: number) => n <= v && v < x

export const round = (v: number, a: number) => Math.round(v * 10 ** a) / 10 ** a
