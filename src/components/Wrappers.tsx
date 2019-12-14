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

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
  <Background>
    <Twemoji>
      <SiteHeader />
      <Main className={className}>{children}</Main>
      <SiteFooter />
    </Twemoji>
  </Background>
)

export const Main: React.FC<WrapperProps> = ({ children, className }) => (
  <main
    className={
      "bg-fluentGray-180 text-fluentGray-70 \
  text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto sm:my-2 my-0 shadow-md \
  transition selection-green " +
        className ?? ""
    }
  >
    {children}
  </main>
)

export interface WrapperProps {
  children: React.ReactNode
  className?: string
}
