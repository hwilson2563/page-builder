import React from 'react'
import styled from 'styled-components'

import SelectedTemplatesContainer from './SelectedTemplatesContainer'

const HeaderFooterImg = styled.img`
  width: 100%;
  margin-bottom: -4px;
`
const TemplatesContainer = styled.div`
  text-align: center;
  align-items: center;
  div {
    padding: 100px 0;
    border: 2px solid fuchsia;
  }
`
const TemplateDirections = styled.div`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontBody};
  font-size: 26px;
  margin: 300px auto;
`

const TemplatesPreview = props => {
  const { screen, selectedTemplates } = props
  let noSelections = selectedTemplates.length === 0
  return (
    <>
      <HeaderFooterImg
        className={'header-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <TemplatesContainer className={'templates-container'}>
        {noSelections ? (
          <TemplateDirections className={'template-directions'}>
            build your page by selecting a template from the left!
          </TemplateDirections>
        ) : (
          <SelectedTemplatesContainer selectedTemplates={selectedTemplates} />
        )}
      </TemplatesContainer>
      <HeaderFooterImg
        className={'footer-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/footer-' + screen + '.png'}
        alt={'Footer'}
      />
    </>
  )
}

export default TemplatesPreview
