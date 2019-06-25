import React, { useState, Fragment } from 'react'
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
const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const FourImageModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [pTags, setPTags] = useState([[0], [0], [0], [0]])

  const addRemovePTags = (addParagraph, index, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs[index].push(createdParagraphs[index].length)
    } else {
      createdParagraphs[index].splice(idx, 1)
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        let remove = incomingDataClone.groups[index]
        let paragraph = 'paragraph' + idx
        delete remove[paragraph]
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
        label={'Section Title'}
        name={'title'}
        error={null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        required
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
      {pTags[0].map((idx) => {
        let valueExists = data.groups && data.groups[0] && data.groups[0]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={1}
              error={null}
              value={valueExists ? data.groups[0]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[0].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 0, idx)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 0)}>Add Paragraph</StyledButton>
      </ButtonContainer>
      {/* Second Img Temp */}
      <Section>Second Image Form</Section>
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
        name={'altText2'}
        error={null}
        value={data['altText2'] ? data['altText2'].value : ''}
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
      {pTags[1].map((idx) => {
        let valueExists = data.groups && data.groups[1] && data.groups[1]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={2}
              error={null}
              value={valueExists ? data.groups[1]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[1].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 1, idx)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 1)}>Add Paragraph</StyledButton>
      </ButtonContainer>
      {/* Third Img Temp */}
      <Section>Third Image Form</Section>
      <FormEntry
        type={'input'}
        label={'Image 3'}
        name={'image3'}
        error={null}
        value={data['image3'] ? data['image3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText3'}
        error={null}
        value={data['altText3'] ? data['altText3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader3'}
        error={null}
        value={data['subheader3'] ? data['subheader3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[2].map((idx) => {
        let valueExists = data.groups && data.groups[2] && data.groups[2]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={3}
              error={null}
              value={valueExists ? data.groups[2]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[2].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 2, idx)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 2)}>Add Paragraph</StyledButton>
      </ButtonContainer>
      {/* Fourth Img Temp */}
      <Section>Fourth Image Form</Section>
      <FormEntry
        type={'input'}
        label={'Image 4'}
        name={'image4'}
        error={null}
        value={data['image4'] ? data['image4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText4'}
        error={null}
        value={data['altText4'] ? data['altText4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader4'}
        error={null}
        value={data['subheader4'] ? data['subheader4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[3].map((idx) => {
        let valueExists = data.groups && data.groups[3] && data.groups[3]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={4}
              error={null}
              value={valueExists ? data.groups[3]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[3].length > 1 && <StyledButton onClick={() => addRemovePTags(false, 3, idx)}>Remove</StyledButton>}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <StyledButton onClick={() => addRemovePTags(true, 3)}>Add Paragraph</StyledButton>
      </ButtonContainer>
    </>
  )
}

FourImageModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default FourImageModal
