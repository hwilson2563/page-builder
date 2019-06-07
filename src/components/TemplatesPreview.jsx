import React from 'react'
import styled from 'styled-components'

const HeaderFooterImg = styled.img`
  width: 100%;
`
const TemplatesContainer = styled.div`
  display: flex;
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
  const { screen } = props

  return (
    <>
      <HeaderFooterImg
        className={'header-image'}
        src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/header-footer/header-' + screen + '.png'}
        alt={'Header'}
      />
      <TemplatesContainer className={'templates-container'}>
        <TemplateDirections className={'template-directions'}>
          build your page by selecting a template from the left!
        </TemplateDirections>
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
