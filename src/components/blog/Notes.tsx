import React, { FC } from "react"
import {
  faInfo,
  IconDefinition,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface NoteProps {
  icon: IconDefinition
  color?: string
}
export const Note: FC<NoteProps> = ({ color, icon, children }) => (
  <div className={color + " p-2 flex"}>
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    {children}
  </div>
)
export const Warn: FC<{}> = ({ children }) => (
  <Note color="bg-fluentOrange-10" icon={faExclamationTriangle}>
    {children}
  </Note>
)
export const Info: FC<{}> = ({ children }) => (
  <Note color="bg-fluentBlue-10" icon={faInfo}>
    {children}
  </Note>
)
