import React from "react"
import { css, keyframes } from "@emotion/core"
import { Info } from "../components/blog/Notes"

const components = {
  h1: (props: any) => (
    <h1 className="border-b border-fluentGray-70 text-150 mt-4" {...props}></h1>
  ),
  h2: (props: any) => (
    <h2
      className="border-b border-fluentGray-70 font-medium text-120 px-1 pt-2"
      {...props}
    />
  ),
  p: (props: any) => <p className="py-1 px-2" {...props} />,
  a: (props: any) => (
    <span className="inline-block relative z-0">
      <a
        className="block"
        css={css({
          "&::before": {
            display: "block",
            content: `""`,
            height: "100%",
            backgroundColor: "#4f6bed00",
            position: "absolute",
            top: 0,
            transition: "400ms color ease-in-out",
            left: 0,
            right: 0,
            zIndex: -1,
          },
          "&:hover": {
            color: "white",
            "&::before": {
              animation: `${anchorWipe} .4s ease-out both`,
            },
          },
        })}
        {...props}
      />
    </span>
  ),
  ul: (props: any) => <ul className="list-disc py-1 px-2 pl-8" {...props} />,
}

const anchorWipe = keyframes`
  0% {
    left: 0;
    right: 100%;
  }
  100% {
    left: 0;
    right: 0;
    background-color:#4f6bedff;
  }`
export default components
