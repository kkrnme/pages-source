import React, { FC } from "react"
import {
  faInfo,
  IconDefinition,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface NoteProps {
  icon: IconDefinition
  className?: string
}
export const Note: FC<NoteProps> = ({ className, icon, children }) => (
  <div className={className + " p-2"}>
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    {children}
  </div>
)
export const Warn: FC<{}> = ({ children }) => (
  <Note className="bg-fluentOrange-10" icon={faExclamationTriangle}>
    {children}
  </Note>
)
export const Info: FC<{}> = ({ children }) => (
  <Note className="bg-fluentBlue-10" icon={faInfo}>
    {children}
  </Note>
)
