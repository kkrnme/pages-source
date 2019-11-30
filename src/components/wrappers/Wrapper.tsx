import React from "react"
import SiteHeader from "../Header"
import SiteFooter from "../Footer"
import Twemoji from "react-twemoji"
import { InterpolationWithTheme } from "@emotion/core"

export default ({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: InterpolationWithTheme<any>
}) => (
  <div className="bg-fluentGray-10 min-h-screen h-full w-full pb-2  transition ">
    <Twemoji>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
    </Twemoji>
  </div>
)

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className="bg-white text-base text-fluentGray-160 tracking-09 w-full md:w-10/12 max-w-4xl mx-auto my-2 overflow-hidden rounded-lg shadow-md">
    {children}
  </main>
)
