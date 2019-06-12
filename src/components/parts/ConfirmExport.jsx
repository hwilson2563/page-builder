import React, { useState } from 'react'
import styled from 'styled-components'

import ExportIcon from './ExportIcon'
import ResponsiveIcon from './ResponsiveIcon'

const ExportButton = styled.button`
  opacity: ${props => (props.showCopy ? 1 : 0)};
  background: transparent;
  height: 67px;
  width: 67px;
  border: none;
  outline: none;
  transition: 0.3s ease-in-out;
  position: absolute;
  right: 10px;
  top: -24px;
  z-index: 1;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const ConfirmButton = styled(ExportButton)`
  right: 80px;
  top: 4px;
  :hover {
    circle {
      fill: ${props => props.theme.accentPrimary};
    }
    .text {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`

const TextArea = styled.textarea`
  height: ${props => (props.showCopy ? '150px' : '0px')};
  width: ${props => (props.showCopy ? '300px' : '0px')};
  opacity: ${props => (props.showCopy ? 1 : 0)};
  z-index: 1;
  position: absolute;
  right: 80px;
  top: 10px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-size: 10px;
  line-height: 1.4em;
  padding: 5px 8px;
  resize: none;
  background-color: ${props => props.theme.backgroundAccent + 'CC'};
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

const ConfirmExport = props => {
  let { showCopy, exportHTML, copyData } = props
  let [reviewedViews, setReviewViews] = useState({ mobile: false, tablet: false, desktop: false })
  const changeScreenSize = () => {
    let width = 678
    let height = 500
    window.self.moveTo((window.screen.availwidth - width) / 2, (window.screen.availheight - height) / 2)
    window.self.resizeTo(width, height)
  }
  return (
    <>
      <TextArea showCopy={showCopy} type={'text'} value={copyData} id={'copy-textarea'} readOnly={'readonly'} />
      <ExportButton showCopy={showCopy} onClick={exportHTML} className={'export-btn'}>
        <ExportIcon showCopy={showCopy} />
      </ExportButton>
      <ConfirmButton showCopy={showCopy} className={'export-btn'} onClick={changeScreenSize}>
        <ResponsiveIcon />
      </ConfirmButton>
    </>
  )
}
export default ConfirmExport
