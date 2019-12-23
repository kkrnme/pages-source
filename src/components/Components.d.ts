import { InterpolationWithTheme } from "@emotion/core"

export interface Stylable {
  className?: string
  css?: InterpolationWithTheme<any>
}
