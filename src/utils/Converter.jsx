import ReactDOMServer from "react-dom/server"
const asciidoctor = require("asciidoctor")()

export default class Converter {
  constructor() {
    this.baseConverter = asciidoctor.Html5Converter.$new()
  }

  convert(node, transform) {
    if (BlogArticleNodeTemplate.has(node.getNodeName())) {
      return ReactDOMServer.RenderToStaticMarkup(
        BlogArticleNodeTemplate[node.getNodeName()]
      )
    }
    return this.baseConverter.convert(node, transform)
  }
}

export const BlogArticleNodeTemplate = new Map([
  "section",
  node => {
    const level = node.level
    return <div className={`sect${level} `}></div>
  },
])
