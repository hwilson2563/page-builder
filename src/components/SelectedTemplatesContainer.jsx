import React from 'react'

const SelectedTemplatesContainer = props => {
  const { selectedTemplates } = props
  return (
    <>
      {selectedTemplates.map(Template => {
        return <Template />
      })}
    </>
  )
}

export default SelectedTemplatesContainer
