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

/**
 * Note継承を新しく作る高階コンポーネント。
 * iconとcolorのtailwind stringを渡してみよう。
 */
export const NoteFactory: (args: {
  icon: IconDefinition
  color: string
}) => FC = args => props => <Note {...args} {...props} />

export const Warn = NoteFactory({
  icon: faExclamationTriangle,
  color: "bg-orange-400 text-gray-900",
})

export const Info = NoteFactory({
  icon: faInfo,
  color: "bg-fluentBlue-10",
})
