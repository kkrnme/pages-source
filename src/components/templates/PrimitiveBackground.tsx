import { BackgroundProps } from "./templates"
import React from "react"
import Twemoji from "react-twemoji"
import Helmet from "react-helmet"
import "../../styles/tailwind.css"
import styled from "@emotion/styled"

/**
 *
 * あらゆるページはこれをルートに持つ。
 * @param props titleには自動的に`"- CHIR.KKRN.ME"が追加される。`
 */
const Component: React.FC<BackgroundProps> = props => (
  <Twemoji noWrapper>
    <div className={props.className}>
      <Helmet>
        <html lang="ja" />
        <meta name="description" content={props.description} />
        <title>{`${props.title} - CHIR.KKRN.ME`}</title>
      </Helmet>
      {props.children}
    </div>
  </Twemoji>
)

export const StyledComponent = styled(Component)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
`

export { StyledComponent as PrimitiveBackground }
