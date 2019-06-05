import React from 'react'

const TemplatesPreview = props => {
  const { screen } = props

  return (
    <>
      <img
        style={{ width: '100%' }}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <img
        style={{ width: '100%' }}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/footer-' + screen + '.png'}
        alt={'Footer'}
      />
    </>
  )
}

export default TemplatesPreview
