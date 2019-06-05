import React from 'react'
import styled from 'styled-components'

const NavArrowSvg = styled.svg`
  height: 20px;
  width : 40px; 
  transform: rotate(180deg);
  margin-top: 20px;
  padding: 10px;
`
const NavArrow = () => {
  return (
    <NavArrowSvg viewBox='0 0 48.248 28.625'>
      <g transform='translate(65.525 59.149) rotate(180)'>
        <g transform='translate(17.277 30.525)'>
          <path
            d='M19.119,29.369a3,3,0,0,0-.864-2.134L6.922,15.9A3.019,3.019,0,0,0,2.653,20.17L11.8,29.318,2.653,38.466a3.037,3.037,0,0,0,0,4.269,2.954,2.954,0,0,0,2.134.864,3.085,3.085,0,0,0,2.134-.864L18.255,31.5A3,3,0,0,0,19.119,29.369Z'
            transform='translate(-1.777 -15.025)'
            fill='#fff'
          />
          <path
            d='M39.231,27.234,27.9,15.9a3.019,3.019,0,0,0-4.269,4.269l9.148,9.148-9.148,9.148a3.037,3.037,0,0,0,0,4.269,2.954,2.954,0,0,0,2.134.864,3.085,3.085,0,0,0,2.134-.864L39.231,31.4A2.914,2.914,0,0,0,39.231,27.234Z'
            transform='translate(-7.303 -15.025)'
            fill='#fff'
          />
          <path
            d='M60.189,27.234,48.856,15.9a3.019,3.019,0,1,0-4.269,4.269l9.148,9.148-9.2,9.2a3.037,3.037,0,0,0,0,4.269,2.954,2.954,0,0,0,2.134.864,3.085,3.085,0,0,0,2.134-.864L60.138,31.452A2.931,2.931,0,0,0,60.189,27.234Z'
            transform='translate(-12.812 -15.025)'
            fill='#fff'
          />
        </g>
      </g>
    </NavArrowSvg>
  )
}
export default NavArrow
