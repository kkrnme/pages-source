import { DeepReadonly, DeepPartial } from "ts-essentials"

export const scheme: DeepReadonly<
  {
    [index in colors]: string
  }
> = {
  background: "#1a202c",
  primaryAccent: "#63b3ed",
  text: "#e2e8f0",
  border: "#4a5568",
}

type colors = "primaryAccent" | "background" | "text" | "border"
