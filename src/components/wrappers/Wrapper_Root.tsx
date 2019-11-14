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
  <div
    className="bg-gray-900 h-screen w-screen text-gray-100 font-sans text-base tracking-widest"
    css={{ touchAction: `manipulation` }}
  >
    <OverrideGlobal styles={styles} />
    <Twemoji>
      <SiteHeader />
      <main className="bg-gray-300 text-gray-900">{children}</main>
      <SiteFooter />
    </Twemoji>
  </div>
)
