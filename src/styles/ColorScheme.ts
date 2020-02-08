import { DeepReadonly } from "ts-essentials"

type colors =
  | "primaryAccent"
  | "background"
  | "cardBackground"
  | "text"
  | "border"
  | "secondaryAccent"

export const cs: DeepReadonly<
  {
    [index in colors]: string
  }
> = {
  background: "#202020",
  cardBackground: "#303030",
  primaryAccent: "#63b3ed",
  secondaryAccent: "#f6e05e",
  text: "#d0d0d0",
  border: "#404040",
}
