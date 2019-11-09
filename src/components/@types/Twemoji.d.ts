declare module "react-twemoji" {
  import React from "react"
  import { ParseObject } from "twemoji"

  class ReactTwemoji extends React.Component<ReactTwemoji.TwemojiProps> {}

  namespace ReactTwemoji {
    type TwemojiProps =
      | {
          noWrapper: true
          options?: TwemojiOptions
          children: React.ReactNode
        }
      | {
          noWrapper?: false
          options?: TwemojiOptions
          tag?: string
          children: React.ReactNode
        }
    type TwemojiOptions = ParseObject
  }
  export type TwemojiOptions = ReactTwemoji.TwemojiOptions
  export type TwemojiProps = ReactTwemoji.TwemojiProps
  export default ReactTwemoji
}
