import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import FormEntry from '../modal/FormEntry'

const SubHeader = styled.p`
  width: 100%;
  text-align: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const StyledButton = styled.button`
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 100%;
  border: 2px solid ${props => props.theme.backgroundAccent};
  background-color: white;
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.mainPrimary};
  border-radius: 3px;
  margin-bottom: 40px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundAccent};
  }
`
const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 13px;
`
const Directions = styled.p`
  width: 100%;
  padding: 5px;
  margin-bottom: 0;
  font-weight: bold;
`
const IdContainer = styled.div`
  width: 165px;
  margin: 10px;
  h4 {
    margin: 5px 0;
  }
`
const LinkingModal = props => {
  const { updateFormData, data, selectedTemplates, updateTemplateData } = props
  const [pTags, setPTags] = useState([0])
  const [links, setLinks] = useState([0])

  const addRemovePTags = (addParagraph, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs.push(createdParagraphs.length)
    } else {
      createdParagraphs.splice(idx, 1)
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      }
    }
    setPTags(createdParagraphs)
  }

  const buildLinks = (addLink, idx) => {
    let createdLinks = [...links]
    if (addLink) {
      createdLinks.push(createdLinks.length)
    } else {
      createdLinks.splice(idx, 1)
    }
    setLinks(createdLinks)
  }

  let groups = [
    { label: 'Id of template you wish the link to', name: 'href', type: 'input' },
    { label: 'Link Aria Label', name: 'ariaLabel', type: 'input' },
    { label: 'Anchor Link Title', name: 'anchorTitle', type: 'input' }
  ]

  const createLinks = idx => {
    return (
      <Fragment key={idx}>
        <SubHeader>Link {idx + 1}</SubHeader>
        {groups.map(link => {
          let valueExists = data.groups && data.groups[idx + 1] && data.groups[idx + 1][link.name]
          return (
            <Fragment key={link.name + idx}>
              <FormEntry
                type={link.name}
                label={link.label}
                name={link.name}
                group={idx + 2}
                error={null}
                value={valueExists ? data.groups[idx + 1][link.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        {links.length > 1 && <StyledButton onClick={() => buildLinks(false, idx)}>Remove</StyledButton>}
      </Fragment>
    )
  }
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
        required
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image'}
        name={'image'}
        error={null}
        value={data['image'] ? data['image'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText'}
        error={null}
        value={data['altText'] ? data['altText'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Title'}
        name={'title'}
        error={null}
        updateFormData={updateFormData}
        value={data['title'] ? data['title'].value : ''}
        required
      />
      {pTags.map((paragraph, idx) => {
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={1}
              error={null}
              value={data['paragraph'] ? data['paragraph'].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags.length > 1 && <StyledButton onClick={() => addRemovePTags(false)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true)}>Add Paragraph</StyledButton>
      </ButtonContainer>
      {/* MORE LINKS CAN BE ADDED */}
      <Options>
        <Directions>
          Copy and paste the id of the template you want to link to. The number at the end represents the order of the
          templates (first to last)
        </Directions>
        {selectedTemplates.map((template, idx) => {
          let id = template.id + '-' + (idx + 1)
          return (
            <IdContainer key={idx}>
              <h4>{template.tempName}</h4>
              <p>{'ID: #' + id}</p>
            </IdContainer>
          )
        })}
      </Options>
      {links.map((product, idx) => createLinks(idx))}
      {links.length < 6 && <ButtonContainer>
        <StyledButton onClick={() => buildLinks(true)}>Add Link</StyledButton>
      </ButtonContainer>}
    </>
  )
}

LinkingModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func,
  selectedTemplates: PropTypes.array
}

export default LinkingModal
