import React, { useState, useEffect } from "react"

export const ScreenSize: React.FC = () => {
  const [height, setHeight] = useState(0),
    [width, setWidth] = useState(0)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(document.documentElement.clientHeight)
      setWidth(document.documentElement.clientWidth)
    })
    window.addEventListener("load", () => {
      setHeight(document.documentElement.clientHeight)
      setWidth(document.documentElement.clientWidth)
    })
  })
  return (
    <p>
      width:{width}, height:{height}, {size(width)}
    </p>
  )
}

const size = (width: number) => {
  if (width >= 1280) {
    return "extra large"
  } else if (width >= 1024) {
    return "large"
  } else if (width >= 768) {
    return "medium"
  } else if (width >= 640) {
    return "small"
  } else {
    return "extra small"
  }
}
