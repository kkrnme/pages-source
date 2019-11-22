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
  <div className=" min-w-full w-screen min-h-full h-screen">
    <OverrideGlobal styles={styles} />
    <Twemoji>
      <SiteHeader />
      <main className="bg-gray-800 mx-auto my-2 w-10/12 max-w-4xl p-4 rounded text-gray-200 text-base">
        {children}
      </main>
      <SiteFooter />
    </Twemoji>
  </div>
)
