import React from "react"
import renderer from "react-test-renderer"

import { SiteFooter } from "../../../src/components/organisms/Footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SiteFooter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
