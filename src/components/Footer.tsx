import React from "react"
import SwipingAnchor from "./blog/general/SwipingAnchor"

export const SiteFooter = () => (
  <footer className="text-center">
    <p>KKRN.ME version 20.01.1</p>
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
export default SiteFooter
