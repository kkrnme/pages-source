import React from "react"
import renderer from "react-test-renderer"
import {
  LinkToPost,
  LinkToPostProps,
} from "../../../src/components/molecules/LinkToPost"
import { css } from "@emotion/core"

const tests = [
  {
    excerpt: "ああああああああああああああああああ",
    title: "今日の天気",
    path: "/",
    css: css``,
  },
]

describe(`LinkToPost`, () => {
  for (const i of tests) {
    it(`renders correctly ${i}`, () => {
      const tree = renderer.create(<LinkToPost post={i}></LinkToPost>).toJSON()

      expect(tree).toMatchSnapshot()
    })
  }
})
