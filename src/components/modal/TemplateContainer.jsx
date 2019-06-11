import React, { useState } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from './Modal'
import CMSModal from './CMSModal'
import { editSelectedTemplates } from '../../utils/utils'

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
  const { idx, screen, template, updateSelectedTemplates } = props
  const Component = template.component
  const [displayForm, setDisplayForm] = useState(false)
  const [templateData, setTemplateData] = useState(template.modalData)

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
    const newData = [...templateData]
    let updatedTemplates = editSelectedTemplates(data, newData)
    setTemplateData(updatedTemplates)
  }
  const CmsModal = () => {
    return (
      <CMSModal
        tempName={template.tempName}
        template={template}
        formData={templateData}
        formProps={template.modal}
        updateTemplateData={updateTemplateData}
      />
    )
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
