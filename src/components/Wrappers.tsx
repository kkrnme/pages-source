import React from "react"
import Twemoji from "react-twemoji"
import SiteHeader from "./Header"
import SiteFooter from "./Footer"

const defaultStyle = "bg-monochrome-1 text-monochrome-e"

/**
 * Background
 * @param props
 */
export const Background: React.FC<WrapperProps> = props => (
  <Twemoji
    className={
      "min-h-screen h-full w-full " + (props.className ?? defaultStyle)
    }
    {...props}
  />
)

/**
 * Centerd empty container.
 * @param props
 */
export const Container = (props: WrapperProps) => (
  <main
    className={
      "container mx-auto overflow-hidden selection-green " +
      (props.className ?? "")
    }
    children={props.children}
  />
)

export const BlogMain: React.FC<WrapperProps> = ({ children, className }) => (
  <main
    className={
      "text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto sm:my-2 my-0 shadow-md \
  transition selection-green " +
      (className ?? "bg-monochrome-4")
    }
  >
    {children}
  </main>
)

export const BlogLikeWrapper: React.FC<WrapperProps> = ({
  children,
  className,
}) => (
  <Background>
    <SiteHeader />
    <BlogMain className={className}>{children}</BlogMain>
    <SiteFooter />
  </Background>
)

export interface WrapperProps {
  children: React.ReactNode
  className?: string
}