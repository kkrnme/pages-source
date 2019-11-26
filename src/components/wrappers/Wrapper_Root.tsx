import React from "react"
import SiteHeader from "../Header"
import SiteFooter from "../Footer"
import OverrideGlobal from "./OverrideGlobal"
import Twemoji from "react-twemoji"
import { InterpolationWithTheme } from "@emotion/core"

export default ({
  children,
  styles,
}: {
  children: React.ReactNode
  styles: InterpolationWithTheme<any>
}) => (
  <div className="bg-fluentGray-10 min-h-screen h-full w-full pb-2 transition">
    <Twemoji>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
    </Twemoji>
  </div>
)

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className="transition bg-white mx-auto my-2 w-10/12 max-w-4xl overflow-hidden rounded-lg text-fluentGray-160 text-base tracking-09 shadow-md">
    {children}
  </main>
)
