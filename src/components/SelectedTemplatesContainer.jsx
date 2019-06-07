import React from 'react'

const SelectedTemplatesContainer = props => {
  const { selectedTemplates } = props
  return (
    <>
      {selectedTemplates.map((Template, idx) => {
        return <Template key={idx} />
      })}
    </>
  )
}

export default SelectedTemplatesContainer
