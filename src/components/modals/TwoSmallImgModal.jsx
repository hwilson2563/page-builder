import React, { useState, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

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
const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const TwoSmallImgModal = props => {
  const { updateFormData, data } = props
  const [pTags, setPTags] = useState([[0], [0]])

  const addRemovePTags = (addParagraph, index, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs[index].push(createdParagraphs[index].length)
    } else {
      createdParagraphs[index].splice(idx, 1)
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
        label={'Title'}
        name={'title'}
        error={null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        srequired
      />
      <Section>First Image Form</Section>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText1'}
        error={null}
        value={data['altText1'] ? data['altText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader1'}
        error={null}
        value={data['subheader1'] ? data['subheader1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[0].map((paragraph, idx) => {
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
            {pTags[0].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 0)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 0)}>Add Paragraph</StyledButton>
      </ButtonContainer>
      <Section>Second Image Form</Section>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'alt2'}
        error={null}
        value={data['alt2'] ? data['alt2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader2'}
        error={null}
        value={data['subheader2'] ? data['subheader2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[1].map((paragraph, idx) => {
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={2}
              error={null}
              value={data['paragraph'] ? data['paragraph'].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[1].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 1)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 1)}>Add Paragraph</StyledButton>
      </ButtonContainer>
    </>
  )
}

TwoSmallImgModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default TwoSmallImgModal
