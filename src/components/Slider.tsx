import React from "react"
import { Global } from "@emotion/core"

export const Slider = ({
  children,
}: React.InputHTMLAttributes<HTMLInputElement> &
  React.ClassAttributes<HTMLInputElement>) => {
  const [letterSpacing, setLetterSpacing] = React.useState(0.09)

  const onInput = (e: React.FormEvent<HTMLInputElement>) =>
    setLetterSpacing(parseFloat(e.currentTarget.value))
  return (
    <div>
      <input
        type="range"
        min="0"
        max="0.2"
        step="0.001"
        value={letterSpacing}
        onInput={onInput}
      />
      <label htmlFor="">{letterSpacing.toFixed(3)}rem</label>
      <Global styles={{ article: { letterSpacing: letterSpacing + "rem" } }} />
      <div>{children}</div>
    </div>
  )
}
