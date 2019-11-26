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
  <Twemoji options={{ className: "wrapperRoot emoji" }}>
    <SiteHeader />
    <Main>{children}</Main>
    <SiteFooter />
  </Twemoji>
)

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className="bg-fluentGray-40 mx-auto my-2 w-10/12 max-w-4xl overflow-hidden rounded-lg text-gray-800 text-base tracking-09">
    {children}
  </main>
)
