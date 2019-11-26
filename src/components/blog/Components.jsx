import { MDXProvider } from "@mdx-js/react"
export default ({ children }) => {
  return (
    <MDXProvider
      components={{
        h1: props => <h1 className="border-b border-gray-600"></h1>,
        h2: props => <h1 className="border-b border-gray-600"></h1>,
        h3: props => <h1 className="border-b border-gray-600"></h1>,
        p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}
