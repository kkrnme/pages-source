import React from "react"
import CenterdWrapper from "../components/wrappers/CenterdWrapper"
import LogoBlock from "../components/logo-block.svg"

export default () => (
  <div>
    <CenterdWrapper>
      <h1>KKRN.ME</h1>
      <p>page of mominis</p>
      <img
        src={LogoBlock}
        alt="KKRN.ME"
        css={{
          width: `80%`,
        }}
      />
    </CenterdWrapper>
  </div>
)
