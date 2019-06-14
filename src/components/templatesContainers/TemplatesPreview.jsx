import React from 'react'
import styled from 'styled-components'

import SelectedTemplatesContainer from './SelectedTemplatesContainer'

const HeaderFooterImg = styled.img`
  width: 100%;
  margin-bottom: -4px;
`
const TemplatesContainer = styled.div`
`

const TemplateDirections = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontBody};
  font-size: 26px;
  margin: 300px auto;
`

const TemplatesPreview = props => {
  const { screen, selectedTemplates, updateSelectedTemplates, giveSelectedTemplateData } = props
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
          <SelectedTemplatesContainer
            selectedTemplates={selectedTemplates}
            updateSelectedTemplates={updateSelectedTemplates}
            giveSelectedTemplateData={giveSelectedTemplateData}
          />
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
