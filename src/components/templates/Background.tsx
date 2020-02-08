import { BackgroundProps } from "./templates"
import React from "react"
import Twemoji from "react-twemoji"
import Helmet from "react-helmet"
import "../../styles/tailwind.css"
import styled from "@emotion/styled"
import { PlainComponent } from "../../utils/PlainComponent"
import { css, Global } from "@emotion/core"
import { cs, mq } from "../../styles"

const Plain: PlainComponent<BackgroundProps> = props => (
  <Twemoji noWrapper>
    <div className={props.className}>
      <Helmet>
        <html lang="ja" />
        <meta name="description" content={props.description} />
        <title>{`${props.title} - CHIR.KKRN.ME`}</title>
      </Helmet>
      <Global
        styles={css`
          :root {
            font-size: inherit;
            scrollbar-color: ${cs.border} ${cs.background};
            ${mq[0]} {
              font-size: 20px;
            }
          }
        `}
      />
      {props.children}
    </div>
  </Twemoji>
)

/**
 *
 * あらゆるページはこれをルートに持つ。
 * @param props titleには自動的に`"- CHIR.KKRN.ME"が追加される。`
 */
const Styled = styled(Plain)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${cs.background};
  color: ${cs.text};
`

export { Styled as Background }
