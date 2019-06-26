import React, { useState, Fragment, useEffect } from 'react'
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
const TwoLargeImgModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [pTags, setPTags] = useState([[0], [0]])

  useEffect(
    () => {
      let clonedPtags = [...pTags]
      if (data.groups && data.groups.length > 0) {
        data.groups.forEach((group, idx) => {
          let groupPosition = idx
          clonedPtags[groupPosition] = []
          let groupArray = Object.keys(group)
          console.log(groupArray)
          groupArray.forEach((input, idx) => {
            clonedPtags[groupPosition].push(idx)
          })
        })
        setPTags(clonedPtags)
      }
    },
    [data.groups]
  )

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
      <Section>First Image Form</Section>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={data['image1'] ? data['image1'].error : null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText1'}
        error={data['altText1'] ? data['altText1'].error : null}
        value={data['altText1'] ? data['altText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader1'}
        error={data['subheader1'] ? data['subheader1'].error : null}
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
              error={valueExists ? data.groups[0]['paragraph' + idx].error : null}
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
      <Section>Second Image Form</Section>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={data['image2'] ? data['image2'].error : null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText2'}
        error={data['altText2'] ? data['altText2'].error : null}
        value={data['altText2'] ? data['altText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader2'}
        error={data['subheader2'] ? data['subheader2'].error : null}
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
              error={valueExists ? data.groups[1]['paragraph' + idx].error : null}
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
    </>
  )
}

TwoLargeImgModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default TwoLargeImgModal
