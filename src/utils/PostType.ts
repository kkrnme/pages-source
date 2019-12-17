import { Maybe, SitePageContextPostNode } from "../../types/graphqlTypes"

export default interface Post {
  node: {
    path: string
    date: string
    status: string
    title: string
    excerpt: string
    html: string
    id: string
    description?: string
  }
  previous?: pn
  next?: pn
  type: "mdx" | "adoc"
}
type pn = {
  path: string
  title: string
}
export type NewPost = Post & {
  previous: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "path" | "title">>
      }>
    }>
  }
  next: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "path" | "title">>
      }>
    }>
  }
  node: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "id">>
      }>
    }>
  }
}
