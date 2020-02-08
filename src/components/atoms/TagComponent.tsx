import React, { ReactChild } from "react"
import { Stylable } from "../../utils/Components"
import { Link } from "gatsby"
import { PlainComponent } from "../../utils/PlainComponent"
import styled from "@emotion/styled"
import { ds, ss, cs } from "../../styles"

type TagComponentProps = Stylable & {
  children: ReactChild
}

type TagLinkProps = TagComponentProps & { children: string }

const Plain: PlainComponent<TagComponentProps> = props => (
  <label className={props.className}>{props.children}</label>
)

export const TagComponent = styled(Plain)`
  margin-left: 0.5rem;
  ${ds.padx(".5rem")}
  ${ss.rounded}
  letter-spacing: 0;
  color: ${cs.background};
  border: ${ss.border};
`

export const TagLink: React.FC<TagLinkProps> = props => (
  <TagComponent className="bg-yellow-500">
    <Link to={`/tags/${props.children}/`}>{props.children}</Link>
  </TagComponent>
)
