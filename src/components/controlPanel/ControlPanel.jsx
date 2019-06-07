import React from 'react'
import styled from 'styled-components'

import EditIcon from './parts/EditIcon'
import RemoveIcon from './parts/RemoveIcon'
import MoveIcon from './parts/MoveIcon'

const Panel = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`
const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 10px 5px;
  cursor: pointer;
  &.down-container {
    transform: rotate(180deg);
  }
`
const ControlPanel = props => {
  let { removeSelectedTemplates, idx } = props
  return (
    <Panel className={'control-panel'}>
      <IconContainer className={'edit-container'}>
        <EditIcon />
      </IconContainer>
      <IconContainer className={'down-container'}>
        <MoveIcon />
      </IconContainer>
      <IconContainer className={'up-container'}>
        <MoveIcon />
      </IconContainer>
      <IconContainer
        className={'remove-container'}
        onClick={() => {
          removeSelectedTemplates(idx)
        }}>
        <RemoveIcon />
      </IconContainer>
    </Panel>
  )
}
export default ControlPanel
