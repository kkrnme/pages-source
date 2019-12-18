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

/**
 * 背景色つきでいろいろな情報を書くとこ。i.e. Warn, Info
 */
export const Note: FC<NoteProps> = ({ color, icon, children }) => (
  <div className={color + " p-2 flex rounded"}>
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    {children}
  </div>
)
export const Warn: FC<{}> = ({ children }) => (
  <Note color="bg-orange-500 text-gray-900" icon={faExclamationTriangle}>
    {children}
  </Note>
)
export const Info: FC<{}> = ({ children }) => (
  <Note color="bg-fluentBlue-10" icon={faInfo}>
    {children}
  </Note>
)
