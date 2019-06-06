import React, { useState } from 'react'
import styled from 'styled-components'

import NavArrow from './parts/NavArrow'
import TemplatesIndex from './parts/TemplatesIndex'

const SideBarContainer = styled.div`
  background-color: ${props=>props.theme.fontMain + 'BF'};
  position: absolute;
  width: 60px;
  transition: width 0.5s ease;
  overflow: hidden;
  height: 100%;
  font-family: ${props => props.theme.fontBasic};
  &.close {
    cursor: pointer;
  }
  &.open {
    width: 350px;
  }
  &.open .nav-arrow {
    animation: fadeOut .8s;
    @keyframes fadeOut {
      0% {
        transform: rotate(180deg);
        opacity: 0;
        padding-left: 20px;
      }
      100% {
        opacity: 1;
        padding-left: 10px;
      }
    }
  }
  &.open .nav-arrow:hover {
    transform: rotate(0);
    padding-right: 20px;
    animation: fadeIn .8s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        padding-right: 10px;
        transform: rotate(180);
      }
      100% {
        opacity: 1;
        padding-right: 20px;
      }
    }
  }
  &.close .nav-arrow {
    transform: scale(1);
    transition: transform 0.1s ease-in;
  }
  &.close:hover .nav-arrow {
    transform: scale(1.1);
    transition: transform 0.1s ease-in;
  }
  &.open .idx-container {
  animation: navOpen 1.5s;
  opacity: 1;
  height: 100%;
    @keyframes navOpen {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  } 
`
const NavHeader = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 20px;
  animation: navOpen 2s;
  @keyframes navOpen {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const IndexContainer = styled.div`
  overflow: scroll;
  height: 0px;
  opacity: 0;
  height: 100%;
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
        {navOpen && <Title className={'sidebar-title'}>templates</Title>}
        <NavArrow navOpen={navOpen} />
      </NavHeader>
      <IndexContainer className={'idx-container'}>{navOpen && <TemplatesIndex />}</IndexContainer>
    </SideBarContainer>
  )
}
export default SideBar
