import { css } from "@emotion/core"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as _FAICON } from "@fortawesome/react-fontawesome"
import React from "react"
import SwipingAnchor from "../components/atoms/SwipingAnchor"
import bg from "../images/tobe.png"
import "../styles/tailwind.css"
import { Background } from "../components/templates/Background"

const FontAwesomeIcon = (props: Parameters<typeof _FAICON>[0]) => (
  <_FAICON {...props} className={"mx-1 " + props.className ?? ""} />
)

export default () => (
  <Background
    className="selection-green text-monochrome-e text-center transition font-light"
    css={css`
      background-image: url(${bg});
      background-attachment: fixed;
      background-size: cover;
      filter: saturate(0.9);
    `}
    description="KKRN.ME, もみにすのサイトです。プログラミングしたりしなかったり。"
    title="HOME"
  >
    <main className="md:mx-auto md:w-3/4 max-w-2xl">
      <h1 className="text-400">KKRN.ME</h1>
      <Sect to="/" icon={faFileAlt} title="Blog">
        脳のしわの奥底から発掘された怪文書。
      </Sect>
      <Sect to="https://twitter.com/MominisJ" icon={faTwitter} title="Twitter">
        暇あればTLを眺めてる。依存してる。
      </Sect>
      <Sect
        to="https://best-friends.chat/@mn"
        icon={faMastodon}
        title="Best Friends"
      >
        Mastodonサーバー。
        <br />
        Twitterを上回るくらいどうでもいいことをしゃべる。
      </Sect>
      <Sect
        to="https://don.nzws.me/@mmns"
        icon={faMastodon}
        title="don.nzws.me"
      >
        Mastodonサーバー。アカウントの運用方法は未知数。
      </Sect>
      <Sect to="https://github.com/kkrnme" icon={faGithub} title="GitHub">
        いまのところ主要な成果物はブログ作っただけ。
        <br />
        なんか作ったら載せます。
      </Sect>
    </main>
    <a
      rel="me"
      href="https://don.nzws.me/@mmns"
      css={css`
        display: none;
      `}
    >
      Mastodon
    </a>
  </Background>
)

const Sect: React.FC<{
  to: string
  icon: IconProp
  title: string
}> = props => (
  <section
    css={css`
      &:nth-of-type(odd) {
        text-align: right;
        h1 a {
          flex-direction: row-reverse;
        }
      }
      &:nth-of-type(even) {
        text-align: left;
        h1 a {
        }
      }
    `}
  >
    <h1 className="text-300 bg-monochrome-3 px-4 ">
      <SwipingAnchor
        to={props.to}
        className="flex items-center underline-anchor"
      >
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.title}</span>
      </SwipingAnchor>
    </h1>
    <p className="bg-transparentBlack-a p-4">{props.children}</p>
  </section>
)
