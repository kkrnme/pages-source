export default interface Post {
  node: {
    path: string
    date: string
    status: string
    title: string
    excerpt: string
    html: string
    id: string
  }
  previous?: pn
  next?: pn
  type: "mdx" | "adoc"
}
type pn = {
  path: string
  title: string
}
