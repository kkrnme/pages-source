import React from "react"
import renderer from "react-test-renderer"

import { AnchorOrLink } from "../../../src/components/atoms/AnchorOrLink"

describe("AnchorOrLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AnchorOrLink to="ddddddddddddddddddddddddddddddddddddd"></AnchorOrLink>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly: https://google.com/", () => {
    const tree = renderer.create(
      <AnchorOrLink to="https://google.com/">Google!</AnchorOrLink>
    )
  })
})
