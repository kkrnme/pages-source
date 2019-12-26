import React from "react"

export const BlogMain: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <main
    className={
      "text-base tracking-09 rounded-none sm:rounded-lg \
  container overflow-hidden \
  mx-auto  \
  transition selection-green border-0 sm:border border-gray-700 " +
      (className ?? "")
    }
  >
    {children}
  </main>
)
