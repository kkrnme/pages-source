import React from "react"
import renderer from "react-test-renderer"

import { SwipingAnchor } from "../../../src/components/atoms/SwipingAnchor"

describe("SwipingAnchor", () => {
  it("renders correctly: SwipingAnchor", () => {
    const tree = renderer
      .create(<SwipingAnchor to="osaka">osaka</SwipingAnchor>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
