import { css } from "@emotion/core"
import { Link } from "gatsby"
import GeoPattern from "geopattern"
import React from "react"
import { Stylable } from "../Components"
import { cs, ss } from "../../styles"
import styled from "@emotion/styled"

type LinkToPostProps = {
  to: string
  title: string
  excerpt: string
  status: string
} & Stylable

const Plain: React.FC<LinkToPostProps> = ({
  to,
  excerpt,
  title,
  className,
}) => (
  <Link to={to} className={className}>
    <div>
      <h2>
        <span>{title}</span>
      </h2>
    </div>
    <p>{excerpt}</p>
  </Link>
)

const Styled = styled(Plain)`
  display: block;
  ${ss.boxShadowMedium};
  ${ss.rounded};
  border-top-left-radius: 0;
  ${ss.hidden};
  height: 100%;
  background-color: ${cs.cardBackground};
  transition: 150ms filter ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
  div {
    text-decoration: none;
    flex-wrap: wrap;
    padding: 0.25rem;
    ${ss.transition};
    color: ${cs.border};

    background-color: ${cs.primaryAccent};
    background-size: contain;
    background-attachment: fixed;
    border-left: 1px solid ${cs.secondaryAccent};
    border-left-width: 4px;
    filter: saturate(180%);
    h2 {
      span {
        ${ss.textShadow}
        color: white;
      }
    }
  }
  p {
    text-align: left;
    padding: 0.5rem;
  }
`

const Container: React.FC<LinkToPostProps> = props => {
  const pattern = GeoPattern.generate(props.title)
  return (
    <Styled
      {...props}
      css={css`
        div {
          background-image: ${pattern.toDataUrl()};
        }
      `}
    />
  )
}

export default Container
