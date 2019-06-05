import React from 'react'
import styled from 'styled-components'

import NavArrow from './parts/NavArrow'

const SideBarContainer = styled.div`
  background-color: black;
  opacity: .75;
  height: 100%;
  width: auto;
  position: absolute;
`
const SideBar = () => {
  return( <SideBarContainer>
    <NavArrow/>
    </SideBarContainer>)
}
export default SideBar
