import React from "react"
import SiteHeader from "../Header"
import SiteFooter from "../Footer"
import Twemoji from "react-twemoji"
import { InterpolationWithTheme } from "@emotion/core"

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  styles,
  className,
}) => (
  <div className="bg-gray-900 min-h-screen h-full w-full pb-2 transition">
    <Twemoji>
      <SiteHeader />
      <Main styles={styles} className={className}>
        {children}
      </Main>
      <SiteFooter />
    </Twemoji>
  </div>
)

const Main: React.FC<WrapperProps> = ({ children, styles, className }) => (
  <main
    className={
      "bg-fluentGray-180 text-fluentGray-70 \
  text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto sm:my-2 my-0 shadow-md \
  transition selection-green " +
        className ?? ""
    }
    css={styles}
  >
    {children}
  </main>
)

export interface WrapperProps {
  children: React.ReactNode
  styles?: InterpolationWithTheme<any>
  className?: string
}
export default Wrapper
