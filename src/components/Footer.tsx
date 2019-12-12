import React from "react"
import { ScreenSize } from "./blog/ippatsuya/ScreenSize"
export default () => (
  <footer className="text-fluentGray-120 text-center">
    <p>
      {"Hosted on "}
      <Anchor href="https://github.com/kkrnme/kkrnme.github.io">
        GitHub Pages
      </Anchor>
      {", licensed under "}
      <Anchor href="https://github.com/kkrnme/pages-source">
        the MIT License.
      </Anchor>
    </p>
    <ScreenSize />
  </footer>
)

const Anchor: React.FC<{ href?: string }> = props => (
  <a
    href={props.href}
    className="transition hover:underline hover:text-fluentRed-10"
  >
    {props.children}
  </a>
)
