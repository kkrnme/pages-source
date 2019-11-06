import React from "react"
export default () => (
  <footer
    css={{
      color: `#FFF4`,
      a: {
        color: `#FFF5`,
      },
      textAlign: `center`,
    }}
  >
    <p>
      This website is
      <a href="https://github.com/kkrnme/kkrnme.github.io">
        {" "}
        hosted on GitHub Pages
      </a>{" "}
      and{" "}
      <a href="https://github.com/kkrnme/pages-source">
        licensed under the MIT License.
      </a>
    </p>
  </footer>
)
