import React, { useState } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from './Modal'
import CMSModal from './CMSModal'

const TemplateContain = styled.div`
  position: relative;
  :first-child .up-container {
    display: none;
  }
  :last-child .down-container {
    display: none;
  }
  :hover .control-panel {
    display: flex;
  }
`
const TemplateContainer = props => {
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

  const { idx, screen, template, updateSelectedTemplates } = props
  const Component = template.component
  const CmsModal = () => {
    return <CMSModal tempName={template.tempName} formData={template.modalData} formProps={template.modal} />
  }
  return (
    <TemplateContain className={'template-container'}>
      <Component />
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
