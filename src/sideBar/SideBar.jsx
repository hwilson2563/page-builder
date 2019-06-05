import React, { useState } from 'react'
import styled from 'styled-components'

import NavArrow from './parts/NavArrow'

const SideBarContainer = styled.div`
  background-color: black;
  opacity: 0.75;
  height: 100%;
  width: auto;
  position: absolute;
`
const SideBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <SideBarContainer onClick={() => toggleNav()}>
      <NavArrow navOpen={navOpen} />
    </SideBarContainer>
  )
}
export default SideBar
