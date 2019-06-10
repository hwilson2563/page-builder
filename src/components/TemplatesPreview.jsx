import React from 'react'
import styled from 'styled-components'

import SelectedTemplatesContainer from './SelectedTemplatesContainer'
import BannerModal from './modals/BannerModal'
import ButtonText from './modals/ButtonTextModal'
import FourImage from './modals/FourImageModal'

const HeaderFooterImg = styled.img`
  width: 100%;
  margin-bottom: -4px;
`
const TemplatesContainer = styled.div`
  text-align: center;
  align-items: center;
  div.template-container {
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
const ModalContainers = styled.div`
  margin: 0 auto;
  max-width: 200px;
`

const TemplatesPreview = props => {
  const { screen, selectedTemplates, updateSelectedTemplates } = props
  let noSelections = selectedTemplates.length === 0
  return (
    <>
      <HeaderFooterImg
        className={'header-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <ModalContainers>
        <BannerModal />
        <ButtonText />
        <FourImage />
      </ModalContainers>
      <TemplatesContainer className={'templates-container'}>
        {noSelections ? (
          <TemplateDirections className={'template-directions'}>
            build your page by selecting a template from the left!
          </TemplateDirections>
        ) : (
          <SelectedTemplatesContainer
            selectedTemplates={selectedTemplates}
            updateSelectedTemplates={updateSelectedTemplates}
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
