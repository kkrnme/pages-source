import React from "react"

export default ({ children }: { children: React.ReactNode }) => (
  <div>
    <header>
      <h2>KKRN.ME</h2>
    </header>
    <main>{children}</main>
  </div>
)
