import React from "react"
import Twemoji from "react-twemoji"
import { Stylable } from "./Components"
import SiteFooter from "./Footer"
import SiteHeader from "./Header"
import Helmet from "react-helmet"
import "../styles/tailwind.css"

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
  mx-auto sm:my-2 my-0 \
  transition selection-green border-0 sm:border border-gray-600 " +
      (className ?? "")
    }
  >
    {children}
  </main>
)

export const BlogLikeWrapper: React.FC<WrapperProps & Meta> = ({
  children,
  className,
  description,
  title,
}) => (
  <Background
    description={description}
    title={title}
    className="bg-gray-900 text-gray-300"
  >
    <SiteHeader />
    <BlogMain className={className}>{children}</BlogMain>
    <SiteFooter />
  </Background>
)

export interface WrapperProps {
  children: React.ReactNode
  className?: string
}
