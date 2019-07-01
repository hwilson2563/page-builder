import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const OneImageTextModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [pTags, setPTags] = useState(data.groups || [0])

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
        label={'Image'}
        name={'image'}
        error={data['image'] ? data['image'].error : null}
        value={data['image'] ? data['image'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText'}
        error={data['altText'] ? data['altText'].error : null}
        value={data['altText'] ? data['altText'].value : ''}
        updateFormData={updateFormData}
        required
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
      {/* MORE PARAGRAPHS TO BE ADDED */}
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
            {pTags.length > 1 && <Button handleClick={() => addRemovePTags(false, idx)} buttonText={'Remove'} />}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <Button handleClick={() => addRemovePTags(true)} buttonText={'Add Paragraph'} />
      </ButtonContainer>
    </>
  )
}

OneImageTextModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default OneImageTextModal
