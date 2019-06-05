import React, { useState } from 'react'
import styled from 'styled-components'

import NavArrow from './parts/NavArrow'

const SideBarContainer = styled.div`
  background-color: black;
  opacity: 0.75;
  height: 100%;
  position: absolute;
  width:60px;
  transition: width .5s ease;
  &.open {
    width: 300px;
  }
`
const NavHeader = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
`
const Title = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  animation: navOpen .3s;
  @keyframes navOpen {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
`
const SideBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  let navStatus = navOpen ? 'open' : 'close'
  return (
    <SideBarContainer className={navStatus} onClick={() => toggleNav()} navOpen={navOpen}>
      <NavHeader>
        {navOpen && <Title>templates</Title>}
        <NavArrow navOpen={navOpen} />
      </NavHeader>
    </SideBarContainer>
  )
}
export default SideBar
