import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styled from 'styled-components'

import SelectedTemplatesContainer from './SelectedTemplatesContainer'
import ExportIcon from './parts/ExportIcon'

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
  :hover {
    button.export-btn {
      opacity: 1;
    }
  }
`
const Button = styled.button`
    display: ${props => (props.noSelections ? 'none' : 'block')};
    opacity: 0;
    background: transparent;
    height: 65px;
    width: 65px;
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
    position: absolute;
    right: 10px;
    top: 200px;
    :hover {
      transform: scale(1.1);
    }
`

const TemplateDirections = styled.div`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontBody};
  font-size: 26px;
  margin: 300px auto;
`

const TemplatesPreview = props => {
  const { screen, selectedTemplates, updateSelectedTemplates } = props
  let noSelections = selectedTemplates.length === 0

  const exportHTML = () => {
    if (selectedTemplates.length) {
      console.log(
        ReactDOMServer.renderToStaticMarkup(<SelectedTemplatesContainer selectedTemplates={selectedTemplates} />)
      )
    }
  }

  return (
    <>
      <HeaderFooterImg
        className={'header-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <TemplatesContainer className={'templates-container'}>
        <Button noSelections={noSelections} onClick={exportHTML} className={'export-btn'}>
          <ExportIcon />
        </Button>
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
