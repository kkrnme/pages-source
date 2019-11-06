import React from "react"
import SiteHeader from "../Header"
import SiteFooter from "../Footer"
import OverrideGlobal from "./OverrideGlobal"
const Twemoji = require("react-twemoji")
import _ from "lodash"
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
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </div>
)
