import React from 'react'

import TemplateContainer from './modal/TemplateContainer'

const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates } = props
  return (
    <>
      {selectedTemplates.map((template, idx) => {
        return (
          <TemplateContainer
            key={idx}
            idx={idx}
            template={template}
            updateSelectedTemplates={updateSelectedTemplates}
          />
        )
      })}
    </>
  )
}

export default SelectedTemplatesContainer
