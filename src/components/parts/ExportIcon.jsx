import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95px;
  height: 95px;
  position: absolute;
  right: 10px;
  top: 270px;
  display: grid;
  transform: scale(0.75);
`
const Export = styled.svg`
  fill: ${props => props.theme.accentPrimary};
`

const ExportText = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 95px;
  border-radius: 100%;
  color: transparent;
  background-color: transparent;
  font-family: ${props => props.theme.fontBody};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    color: white;
    background-color: ${props => props.theme.accentPrimary};
    color: white;
  }
`
const ExportIcon = props => {
  return (
    <Container className='export-container'>
      <Export>
        <g id='Group_25' data-name='Group 25' transform='translate(-1809 -255)'>
          <g id='noun_export_2303934' transform='translate(1835 281)'>
            <g id='arrow-group' data-name='Group 22' transform='translate(0 0)'>
              <path
                id='arrow-handle'
                d='M0,2.155a2.155,2.155,0,0,1,4.309,0V29.577a2.155,2.155,0,1,1-4.309,0Z'
                transform='translate(38.781) rotate(45)'
              />
              <path
                id='arrow-head'
                d='M20.433,6.379H11.814a2.155,2.155,0,1,1,0-4.309H22.587a2.155,2.155,0,0,1,2.155,2.155V15a2.155,2.155,0,1,1-4.309,0Z'
                transform='translate(16.194 -1.178)'
              />
              <path
                id='arrow-box'
                d='M33.7,21.763a2.155,2.155,0,1,1,4.309,0V33.882a6.194,6.194,0,0,1-6.194,6.194H7.574A6.194,6.194,0,0,1,1.38,33.882V9.644A6.194,6.194,0,0,1,7.574,3.45H20.7a2.155,2.155,0,0,1,0,4.309H7.574A1.885,1.885,0,0,0,5.689,9.644V33.882a1.885,1.885,0,0,0,1.885,1.885H31.812A1.885,1.885,0,0,0,33.7,33.882Z'
                transform='translate(-1.38 1.751)'
              />
            </g>
          </g>
          <g transform='translate(1809 255)' stroke='#E66D1C' strokeWidth='6'>
            <circle cx='46.477' cy='46.477' r='43.477' fill='none' />
          </g>
        </g>
      </Export>
      <ExportText className={'export-text'}>Export</ExportText>
    </Container>
  )
}

export default ExportIcon
