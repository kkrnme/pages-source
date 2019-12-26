import { BackgroundProps } from "./templates"
import React from "react"
import Twemoji from "react-twemoji"
import Helmet from "react-helmet"
import "../../styles/tailwind.css"

export const PrimitiveBackground: React.FC<BackgroundProps> = props => (
  <Twemoji noWrapper>
    <div
      className={"min-h-screen h-full w-full " + (props.className ?? "")}
      css={props.css}
    >
      <Helmet>
        <html lang="ja" />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </div>
  </Twemoji>
)