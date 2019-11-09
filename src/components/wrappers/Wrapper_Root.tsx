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
  <div>
    <OverrideGlobal styles={styles} />
    <Twemoji>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </Twemoji>
  </div>
)
