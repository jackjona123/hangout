import { Link } from "gatsby"
import React, { FC } from "react"
import { DiscordButton } from "../DiscordButton"
import { HomePartner } from "../HomePartner"
import { WavesBottom, WavesTop } from "../Waves"
import * as SC from "./styles"
import { OutMode, MoveDirection } from "react-particles-js"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <SC.MenuItem
      to={to}
      activeClassName="active"
      className={to === "/" ? "disabled" : ""}
    >
      <SC.MenuItemText>{children}</SC.MenuItemText>
      <SC.MenuItemLine />
    </SC.MenuItem>
  )
}

export const Home: FC = () => {
  return (
    <SC.HomeWrapper>
      <WavesTop />
      <SC.FadedBottomWave>
        <WavesBottom />
      </SC.FadedBottomWave>

      <SC.StyledParticles
        params={{
          particles: {
            /* eslint-disable-next-line id-blacklist */
            number: { value: 5, density: { enable: true, value_area: 500 } },
            color: { value: "#ffffff" },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false },
            },
            size: {
              value: 36,
              random: true,
              anim: { enable: false },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: MoveDirection.top,
              random: false,
              straight: false,
              out_mode: OutMode.out,
              bounce: false,
              attract: { enable: false },
            },
          },
          retina_detect: true,
        }}
      />
      <SC.InnerWrapper>
        <SC.TitleWrapper>
          <Link to="/">
            <SC.Logo />
          </Link>
          <SC.Title>Jack Jona&apos;s Hangout</SC.Title>
        </SC.TitleWrapper>
        <SC.Menu>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/rules">Rules</MenuItem>
          <MenuItem to="/beginners">Beginners</MenuItem>
          <MenuItem to="/faq">FAQ</MenuItem>
          <MenuItem to="/bots">Bots</MenuItem>
          <MenuItem to="/resources">Resources</MenuItem>
          <MenuItem to="/archives">Tech Spotlights</MenuItem>
        </SC.Menu>
        <DiscordButton>Join Me</DiscordButton>
        {/*<HomePartner />*/}
      </SC.InnerWrapper>
    </SC.HomeWrapper>
  )
}
