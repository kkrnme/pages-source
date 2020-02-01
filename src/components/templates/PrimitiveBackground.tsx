import { BackgroundProps } from "./templates"
import React from "react"
import Twemoji from "react-twemoji"
import Helmet from "react-helmet"
import "../../styles/tailwind.css"
import styled from "@emotion/styled"
import { PlainComponent } from "../../utils/PlainComponent"

const Component: PlainComponent<BackgroundProps> = props => (
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

/**
 *
 * あらゆるページはこれをルートに持つ。
 * @param props titleには自動的に`"- CHIR.KKRN.ME"が追加される。`
 */
export const StyledComponent = styled(Component)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
`

export { StyledComponent as PrimitiveBackground }
