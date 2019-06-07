import React from 'react'
import styled from 'styled-components'

import AddIcon from './AddIcon'
import { templates } from '../../../utils/templates.js'

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 50px;
  }
  cursor: pointer;
  svg {
    transition: all 0.2s ease-out;
    opacity: 0.9;
  }
  :hover svg {
    opacity: 1;
    transform: scale(1.05);
    transition: all 0.2s ease-in;
  }
`
const ImgIcon = styled.div`
  display: flex;
  align-items: center;
`
const TemplateImg = styled.img`
  margin-bottom: 5px;
`
const TemplateName = styled.div`
  color: ${props => props.theme.fontOverlay};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  width: 275px;
  align-self: flex-start;
  text-align: center;
  margin-left: 20px;
`
const AddButton = styled.button`
  outline: 0;
  border: none;
  background-color: unset;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-left: 10px;
  transform: scale(1);
`
const TemplatesIndex = props => {
  const { updateSelectedTemplates } = props
  return (
    <>
      {templates.map((template, idx) => {
        const { tempName, thumbnailImg } = template
        let imgUrl = 'https:///dev.woodlanddirect.com/learningcenter/pagebuilder+/templateimgs/' + thumbnailImg
        return (
          <Template
            key={idx}
            className={'idx-template-container'}
            onClick={() => {
              updateSelectedTemplates('add', template.component)
            }}>
            <ImgIcon className={'img-icon'}>
              <TemplateImg src={imgUrl} className={'template-img'} />
              <AddButton className={'add-button'}>
                <AddIcon />
              </AddButton>
            </ImgIcon>
            <TemplateName className={'template-icon'}>{tempName}</TemplateName>
          </Template>
        )
      })}
    </>
  )
}
export default TemplatesIndex
