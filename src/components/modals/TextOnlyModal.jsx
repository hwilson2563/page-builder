import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

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
const TextOnlyModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [pTags, setPTags] = useState([0])

  const addRemovePTags = (addParagraph, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs.push(createdParagraphs.length)
    } else {
      createdParagraphs.splice(idx, 1)
      let incomingDataClone = {...data}
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      } 
    }
    setPTags(createdParagraphs)
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
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      <FormEntry
        type={'input'}
        label={'Title'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags.map((paragraph, idx) => {
        let valueExists = data.groups && data.groups[idx] && data.groups[idx]['paragraph']
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph'}
              group={idx + 1}
              error={valueExists ? data.groups[idx]['paragraph'].error : null}
              value={valueExists ? data.groups[idx]['paragraph'].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags.length > 1 && <StyledButton onClick={() => addRemovePTags(false, idx)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true)}>Add Paragraph</StyledButton>
      </ButtonContainer>
    </>
  )
}

TextOnlyModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default TextOnlyModal
