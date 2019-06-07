import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styled from 'styled-components'

import SelectedTemplatesContainer from './SelectedTemplatesContainer'
import ExportIcon from './parts/ExportIcon'

const HeaderFooterImg = styled.img`
  width: 100%;
`
const TemplatesContainer = styled.div`
  text-align: center;
  align-items: center;
  div {
    padding: 100px 0;
    border: 2px solid purple;
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

  const exportHTML = () => {
    // console.log(ReactDOMServer.renderToStaticMarkup(<SelectedTemplatesContainer />))
    console.log(ReactDOMServer.renderToStaticMarkup(<ExportIcon />))
    console.log(ReactDOMServer.renderToStaticMarkup(<HeaderFooterImg />))
    console.log(ReactDOMServer.renderToStaticMarkup(<TemplatesContainer />))
  }

  return (
    <>
      <HeaderFooterImg
        className={'header-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <button onClick={exportHTML}>
        <ExportIcon />
      </button>
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
