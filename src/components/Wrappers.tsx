import React from "react"
import Twemoji from "react-twemoji"
import SiteHeader from "./Header"
import SiteFooter from "./Footer"
import { InterpolationWithTheme } from "@emotion/core"

/**
 * Background
 * @param props
 */
export const Background: React.FC<Stylable> = props => (
  <Twemoji>
    <div
      className={"min-h-screen h-full w-full " + (props.className ?? "")}
      css={props.css}
    >
      {props.children}
    </div>
  </Twemoji>
)

export interface Stylable {
  children: React.ReactNode
  className?: string
  css?: InterpolationWithTheme<any>
}

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
  transition selection-green border-0 sm:border border-monochrome-5 " +
      (className ?? "")
    }
  >
    {children}
  </main>
)

export const BlogLikeWrapper: React.FC<WrapperProps> = ({
  children,
  className,
}) => (
  <Background className="bg-monochrome-2 text-monochrome-e">
    <SiteHeader />
    <BlogMain className={className}>{children}</BlogMain>
    <SiteFooter />
  </Background>
)

export interface WrapperProps {
  children: React.ReactNode
  className?: string
}
