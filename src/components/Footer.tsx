import React from "react"
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
