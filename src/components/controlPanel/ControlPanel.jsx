import React from 'react'
import styled from 'styled-components'

import EditIcon from './parts/EditIcon'
import RemoveIcon from './parts/RemoveIcon'
import MoveIcon from './parts/MoveIcon'

const Panel = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  right: 10px;
  font-family: ${props => props.theme.fontBody};
`
const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 10px 5px;
  cursor: pointer;
  position: relative;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    display: block;
    transform: scale(1.1) rotate(0deg);
    transition: all 0.3s ease-in-out;
    circle {
      fill: ${props => props.theme.accentPrimary};
    }
    .text {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`
const Text = styled.div`
  opacity: 0;
  position: absolute;
  color: white;
  font-size: 10px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-transform: uppercase;
  font-weight: bold;
  z-index: 1;
`
const ControlPanel = props => {
  let { updateSelectedTemplates, idx } = props
  return (
    <Panel className={'control-panel'}>
      <IconContainer className={'edit-container'}>
        <Text className={'text'}>edit</Text>
        <EditIcon />
      </IconContainer>
      <IconContainer
        className={'down-container'}
        onClick={() => {
          updateSelectedTemplates('down', '', idx)
        }}>
        <Text className={'text'}>down</Text>
        <MoveIcon direction={'down'} />
      </IconContainer>
      <IconContainer
        className={'up-container'}
        onClick={() => {
          updateSelectedTemplates('up', '', idx)
        }}>
        <Text className={'text'}>up</Text>
        <MoveIcon direction={'up'} />
      </IconContainer>
      <IconContainer
        className={'remove-container'}
        onClick={() => {
          updateSelectedTemplates('remove', '', idx)
        }}>
        <Text className={'text'}>remove</Text>
        <RemoveIcon />
      </IconContainer>
    </Panel>
  )
}
export default ControlPanel
