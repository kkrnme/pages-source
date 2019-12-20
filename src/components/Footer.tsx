import React from "react"
import SwipingAnchor from "./blog/general/SwipingAnchor"
export default () => (
  <footer className="text-center">
    <p>
      {"Hosted on "}
      <SwipingAnchor to="https://github.com/kkrnme/kkrnme.github.io">
        GitHub Pages
      </SwipingAnchor>
      {", licensed under "}
      <SwipingAnchor to="https://github.com/kkrnme/pages-source">
        the MIT License.
      </SwipingAnchor>
    </p>
  </footer>
)
