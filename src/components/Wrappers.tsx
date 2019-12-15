import React from "react"
import Twemoji from "react-twemoji"
import SiteHeader from "./Header"
import SiteFooter from "./Footer"

/**
 * Background
 * @param props
 */
export const Background: React.FC<WrapperProps> = props => (
  <Twemoji>
    <div className={"min-h-screen h-full w-full " + (props.className ?? "")}>
      {props.children}
    </div>
  </Twemoji>
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
  mx-auto sm:my-2 my-0 \
  transition selection-green border-r border-l border-monochrome-5 " +
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
