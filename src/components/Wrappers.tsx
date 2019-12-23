import { css } from "@emotion/core"
import React, { PropsWithChildren, ReactNode, ReactElement } from "react"
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

export const PrimitiveBackground: React.FC<BackgroundProps> = props => (
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
 * Background
 * @param props
 */
export const GrayBackground: React.FC<Meta> = props => (
  <PrimitiveBackground
    {...props}
    className="bg-gray-900 text-gray-300"
  ></PrimitiveBackground>
)

/**
 * Centerd empty container.
 * @param props
 */
export const Container: React.FC<Stylable> = props => (
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

export const BlogPageWithoutTOC: React.FC<Meta> = props => (
  <BlogPage
    {...props}
    BlogWrapper={({ children }) => (
      <BlogMain className="mx-auto sm:my-2 my-0">{children}</BlogMain>
    )}
  ></BlogPage>
)

export const BlogPageWithTOC: React.FC<Meta & {
  TOC: TOC
  visible: boolean
}> = props => (
  <BlogPage
    {...props}
    BlogWrapper={({ children }) => (
      <div className="block md:flex sm:my-2 my-0 justify-between">
        <BlogMain className={"lg:ml-auto lg:mr-2 lg:max-w-768px"}>
          {children}
        </BlogMain>
        {!props.visible ? (
          <TableOfContents
            TOC={props.TOC}
            className="mx-auto lg:mr-auto ml-2 h-full max-w-235px sticky"
            css={css`
              top: 0.5rem;
            `}
          />
        ) : null}
      </div>
    )}
  ></BlogPage>
)

export const BlogPage: React.FC<BlogPageProps> = props => (
  <GrayBackground description={props.description} title={props.title}>
    <SiteHeader />
    <props.BlogWrapper children={props.children} />

    <SiteFooter />
  </GrayBackground>
)
export type BlogPageProps = { BlogWrapper: React.FC } & Meta
export type BackgroundProps = Stylable & Meta

export interface WrapperProps {
  className?: string
}
