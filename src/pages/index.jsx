import React from "react"
import { SiteHeader, SiteFooter } from "../components/HeaderFooter"
import { TopStyle } from "../components/style"
import LogoBlock from "../components/logo-block.svg"

export default () => (
  <div>
    <TopStyle />
    <SiteHeader />
    <main>
      <h1>KKRN.ME</h1>
      <p>page of mominis</p>
      <img
        src={LogoBlock}
        alt="KKRN.ME"
        css={{
          width: `80%`,
        }}
      />
    </main>
    <SiteFooter />
  </div>
)
