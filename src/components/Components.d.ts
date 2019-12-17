import { InterpolationWithTheme } from "@emotion/core"

export interface Stylable {
  children: React.ReactNode
  className?: string
  css?: InterpolationWithTheme<any>
}
