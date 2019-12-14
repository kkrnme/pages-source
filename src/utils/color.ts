export class c {
  constructor(hex: string) {
    const desharpedHex = hex.replace(/\s|#/g, "").toLowerCase()
    if (hexValidate(desharpedHex)) {
      throw new Error("invalid value")
    }
    this.hex = hex
    this.rgb = hex2rgb(desharpedHex)
  }
  getHSL() {
    return rgb2hsl(this.rgb)
  }
  getRelativeLuminance() {
    return (
      0.2126 * rl(this.rgb.red / 255) +
      0.7152 * rl(this.rgb.green / 255) +
      0.0722 * rl(this.rgb.blue / 255)
    )
  }
  hex: string
  rgb: { [key in "red" | "green" | "blue"]: number }
}
export interface color {
  hex: string
  rgb: { [key in "red" | "green" | "blue"]: number }
  sRGB: { [key in "sR" | "sG" | "sB"]: number }
  hsl: { [key in "hue" | "saturation" | "lightness"]: number }
  relativeLuminance: number
}
export const hexValidate = (hex: string): boolean => {
  const len = hex.length
  return (len !== 3 && len !== 6) || /[^\dabcdef]/.exec(hex) !== null
}

export const hex2rgb = (hex: string): color["rgb"] => {
  try {
    const formatedHex = hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex,
      hexArray = formatedHex.match(/../g),
      hexNumberArray = hexArray?.map(v => Number.parseInt(v, 16))

    if (hexNumberArray == null) throw new Error("null match")
    if (hexNumberArray.includes(NaN)) throw new Error("includes NaN")
    return {
      red: hexNumberArray[0],
      green: hexNumberArray[1],
      blue: hexNumberArray[2],
    }
  } catch (e) {
    console.log(e.message)
    return e.message
  }
}

export const rgb2srgb = (rgb: color["rgb"]): color["sRGB"] => {
  const { red, green, blue } = rgb
  return {
    sR: red / 255,
    sG: green / 255,
    sB: blue / 255,
  }
}

export const rl = (c: number) =>
  c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
//if RsRGB <= 0.03928 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4

export const rt = (a: number | string, b: number | string): number => {
  try {
    if (typeof a === "string" || typeof b === "string") throw Error
    const [lighter, darker] = a > b ? [a, b] : [b, a],
      ratio = (lighter + 0.05) / (darker + 0.05)

    console.log(ratio)
    return ratio
  } catch (e) {
    return e.massage
  }

  //(L1 + 0.05) / (L2 + 0.05)
}

export const hsl2rgb = ({
  hue,
  saturation,
  lightness,
}: color["hsl"]): color["rgb"] => {
  const max = lightness + saturation / 2,
    min = lightness - saturation / 2
  if (compare(0, hue, 60)) {
    return { red: max, green: min + ((max - min) * hue) / 60, blue: min }
  } else if (compare(60, hue, 120)) {
    return {
      red: min + ((max - min) * (120 - hue)) / 60,
      green: max,
      blue: min,
    }
  } else if (compare(120, hue, 180)) {
    return {
      red: min,
      green: max,
      blue: min + ((max - min) * (hue - 120)) / 60,
    }
  } else if (compare(180, hue, 240)) {
    return {
      red: min,
      green: min + ((max - min) * (240 - hue)) / 60,
      blue: max,
    }
  } else if (compare(240, hue, 300)) {
    return {
      red: min + ((max - min) * (hue - 240)) / 60,
      green: min,
      blue: max,
    }
  } else if (compare(300, hue, 360)) {
    return {
      red: max,
      green: min,
      blue: min + ((max - min) * (360 - hue)) / 60,
    }
  } else {
    return {
      red: max,
      green: max,
      blue: max,
    }
  }
}

export const rgb2hsl = ({ red, green, blue }: color["rgb"]): color["hsl"] => {
  const min = Math.min(red, green, blue),
    max = Math.max(red, green, blue),
    lightness = (min + max) / 2,
    saturation = max - min
  if (min === max) {
    return {
      hue: 0,
      lightness,
      saturation,
    }
  } else if (min === blue) {
    return {
      hue: (60 * (green - red)) / (max - min) + 60,
      lightness,
      saturation,
    }
  } else if (min === red) {
    return {
      hue: (60 * (blue - green)) / (max - min) + 180,
      lightness,
      saturation,
    }
  } else if (min === green) {
    return {
      hue: (60 * (red - blue)) / (max - min) + 300,
      lightness,
      saturation,
    }
  } else {
    return {
      hue: 0,
      lightness,
      saturation,
    }
  }
}

export const compare = (n: number, v: number, x: number) => n <= v && v < x

export const round = (v: number, a: number) => Math.round(v * 10 ** a) / 10 ** a
