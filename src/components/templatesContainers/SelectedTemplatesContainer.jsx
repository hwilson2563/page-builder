import React from 'react'
import styled from 'styled-components'

import ConfirmExportPanel from '../confirmExportPanel/ConfirmExportPanel'
import TemplateContainer from './TemplateContainer'

const TemplatesContainer = styled.div`
  position: relative;
  :hover {
    button {
      opacity: 1;
    }
  }
`

const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates, giveSelectedTemplateData } = props

  return (
    <TemplatesContainer>
      <ConfirmExportPanel selectedTemplates={selectedTemplates} />
      {selectedTemplates.map((template, idx) => {
        let selectedTemplateLength = selectedTemplates.length - 1
        return (
          <TemplateContainer
            key={idx}
            idx={idx}
            selectedTemplates={selectedTemplates}
            selectedTemplateLength={selectedTemplateLength}
            template={template}
            updateSelectedTemplates={updateSelectedTemplates}
            giveSelectedTemplateData={giveSelectedTemplateData}
          />
        )
      })}
    </TemplatesContainer>
  )
}

export default SelectedTemplatesContainer
