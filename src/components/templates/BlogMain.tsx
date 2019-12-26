import { WrapperProps } from "../Wrappers"
import React from "react"

export const BlogMain: React.FC<WrapperProps> = ({ children, className }) => (
  <main
    className={
      "text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto  \
  transition selection-green border-0 sm:border border-gray-600 " +
      (className ?? "")
    }
  >
    {children}
  </main>
)
