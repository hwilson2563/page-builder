import React, { useState } from 'react'
import styled from 'styled-components'

import NavArrow from './parts/NavArrow'
import TemplatesIndex from './parts/TemplatesIndex'

const SideBarContainer = styled.div`
  background-color: ${props => props.theme.fontMain + 'BF'};
  position: fixed;
  width: 60px;
  transition: width 0.5s ease;
  overflow: hidden;
  height: 100%;
  font-family: ${props => props.theme.fontBasic};
  z-index: 1;
  &.open {
    width: 350px;
  }
  &.open .nav-arrow {
    transform: rotate(180deg);
    animation: fadeOutOpen 0.8s;
    @keyframes fadeOutOpen {
      0% {
        opacity: 0;
        transform: rotate(180deg);
        padding-left: 20px;
      }
      100% {
        opacity: 1;
        padding-left: 10px;
      }
    }
  }
  &.open .nav-arrow:hover {
    transform: rotate(0deg);
    padding-right: 20px;
    animation: fadeInOpen 0.8s;
    @keyframes fadeInOpen {
      0% {
        opacity: 0;
        padding-right: 10px;
        transform: rotate(0deg);
      }
      100% {
        opacity: 1;
        padding-right: 20px;
      }
    }
  }
  &.close .nav-arrow {
    transform: rotate(0deg);
    animation: fadeOutClose 0.8s;
    @keyframes fadeOutClose {
      0% {
        opacity: 0;
        padding-left: 15px;
      }
      100% {
        opacity: 1;
        transform: rotate(0deg);
      }
    }
  }
  &.close .nav-arrow:hover {
    transform: rotate(180deg);
    padding-right: 15px;
    animation: fadeInClose 0.8s;
    @keyframes fadeInClose {
      0% {
        opacity: 0;
        padding-right: 10px;
        transform: rotate(180deg);
      }
      100% {
        opacity: 1;
        padding-right: 15px;
      }
    }
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
  color: ${props => props.theme.fontOverlay};
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
const SideBar = props => {
  const { updateSelectedTemplates } = props
  const [navOpen, setNavOpen] = useState(true)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  let navStatus = navOpen ? 'open' : 'close'
  return (
    <SideBarContainer className={navStatus} navOpen={navOpen}>
      <NavHeader onClick={() => toggleNav()}>
        {navOpen && <Title className={'sidebar-title'}>templates</Title>}
        <NavArrow navOpen={navOpen} />
      </NavHeader>
      {navOpen && (
        <IndexContainer className={'idx-container'}>
          <TemplatesIndex updateSelectedTemplates={updateSelectedTemplates} />
        </IndexContainer>
      )}
    </SideBarContainer>
  )
}
export default SideBar
