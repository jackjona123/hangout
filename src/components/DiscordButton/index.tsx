import React, { FC } from "react"
import * as SC from "./styles"

export const DiscordButton: FC = ({ children }) => {
  return (
    <SC.DiscordButtonWrapper
      className="button"
      rel="noreferrer"
      href="https://discord.gg/NhUJhND32E"
    >
      <SC.StyledDiscordLogo /> {children}
    </SC.DiscordButtonWrapper>
  )
}
