import { css } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"
import Twemoji from "react-twemoji"
import "../styles/tailwind.css"
import { TableOfContents, TOC } from "./blog/general/TableOfContents"
import { Stylable } from "./Components"
import SiteFooter from "./Footer"
import SiteHeader from "./Header"

export interface Meta {
  description: string
  title: string
}
/**
 * Background
 * @param props
 */
export const Background: React.FC<Stylable & Meta> = props => (
  <Twemoji noWrapper>
    <div
      className={"min-h-screen h-full w-full " + (props.className ?? "")}
      css={props.css}
    >
      <Helmet>
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </div>
  </Twemoji>
)

/**
 * Centerd empty container.
 * @param props
 */
export const Container = (props: Stylable) => (
  <main
    className={
      "container mx-auto overflow-hidden selection-green " +
      (props.className ?? "")
    }
    children={props.children}
    css={props.css}
  />
)

export const BlogMain: React.FC<WrapperProps> = ({ children, className }) => (
  <main
    className={
      "text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto  \
  transition selection-green border-0 sm:border border-gray-600 " +
      (className ?? "")
    }
  >
    {children}
  </main>
)

export const BlogLikeWrapper: React.FC<WrapperProps &
  Meta & { TOC?: TOC; ISTM?: Boolean }> = ({
  children,
  className,
  description,
  title,
  TOC,
}) => {
  return (
    <Background
      description={description}
      title={title}
      className="bg-gray-900 text-gray-300"
    >
      <SiteHeader />
      <div className="block md:flex sm:my-2 my-0 justify-between">
        <BlogMain className={"lg:ml-auto lg:mr-2 lg:max-w-768px " + className}>
          {children}
        </BlogMain>
        {TOC && (
          <TableOfContents
            TOC={TOC}
            className="mx-auto lg:mr-auto ml-2 h-full max-w-255px sticky"
            css={css`
              top: 0.5rem;
            `}
          />
        )}
      </div>
      <SiteFooter />
    </Background>
  )
}

export interface WrapperProps {
  children: React.ReactNode
  className?: string
}
