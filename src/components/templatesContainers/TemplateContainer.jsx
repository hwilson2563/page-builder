import React, { useState } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from '../modal/Modal'
import CMSModal from '../modal/CMSModal'

const TemplateContain = styled.div`
  position: relative;
  :hover {
    .control-panel {
      opacity: 1;
    }
  }
  .up-container {
    display: ${props => (props.idx === 0 ? 'none' : 'default')};
  }
  .down-container {
    display: ${props => (props.selectedTemplateLength === props.idx ? 'none' : 'default')};
  }
`
const TemplateContainer = props => {
  const { idx, screen, selectedTemplateLength, template, updateSelectedTemplates, giveSelectedTemplateData } = props
  const Component = template.component
  const [displayForm, setDisplayForm] = useState(false)

  // modal functions
  const toggleDisplayForm = () => {
    setDisplayForm(!displayForm)
  }
  const handleClick = () => {
    toggleDisplayForm()
  }
  const closeModal = (e, value) => {
    e.stopPropagation()
    if (value === 'close') {
      toggleDisplayForm()
    }
  }
  // end modal functions

  const updateTemplateData = data => {
    debugger
    giveSelectedTemplateData(idx, data)
  }
  const CmsModal = () => {
    return (
      <CMSModal
        closeModal={closeModal}
        tempName={template.tempName}
        formData={template.data}
        formProps={template.modal}
        updateTemplateData={updateTemplateData}
      />
    )
  }
  return (
    <TemplateContain className={'template-container'} selectedTemplateLength={selectedTemplateLength} idx={idx}>
      <Component templateData={template.data} />
      <ControlPanel
        updateSelectedTemplates={updateSelectedTemplates}
        handleClick={handleClick}
        idx={idx}
        modal={template.modal}
      />
      {displayForm && <Modal displayModal={displayForm} modal={CmsModal} closeModal={closeModal} screen={screen} />}
    </TemplateContain>
  )
}

export default TemplateContainer
