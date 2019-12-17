import React, { useState, useEffect } from "react"
import { Background, Container } from "../components/Wrappers"
import "../styles/tailwind.css"
import meyend from "../resources/meyend.svg"
import script from "../resources/logo-script-white.svg"
import bg from "../components/images/tobe.png"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default () => (
  <Background
    css={css`
      background-image: url(${bg});
      background-attachment: fixed;
      background-size: cover;
      filter: grayscale(0.2);
    `}
    description="KKRN.ME, もみにすのサイトです。プログラミングしたりしなかったり。"
    title="HOME - KKRN.ME"
  >
    <Container
      className="p-5 md:p-5 min-h-screen text-monochrome-e text-center text-shadow bg-transparentBlack-7"
      css={css`
        backdrop-filter: grayscale(1);
      `}
    >
      <h1 className="text-400">KKRN.ME</h1>
      <h2 className="text-300">
        <Link to="/blog/">BLOG</Link>
      </h2>
    </Container>
  </Background>
)
