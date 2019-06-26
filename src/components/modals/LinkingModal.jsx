import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import FormEntry from '../modal/FormEntry'

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
  const { updateFormData, data, selectedTemplates } = props
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
        updateFormData={updateFormData}
        value={data['title'] ? data['title'].value : ''}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph Text'}
        name={'paragraph'}
        error={data['paragraph'] ? data['paragraph'].error : null}
        value={data['paragraph'] ? data['paragraph'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* MORE LINKS CAN BE ADDED */}
      <FormEntry
        type={'input'}
        label={'Id of template you wish to link to'}
        name={'link'}
        error={data['link'] ? data['link'].error : null}
        value={data['link'] ? data['link'].value : ''}
        updateFormData={updateFormData}
        required
      />
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
      <FormEntry
        type={'input'}
        label={'Link Aria Label'}
        name={'ariaLabel'}
        error={data['ariaLabel'] ? data['ariaLabel'].error : null}
        value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Anchor Link Title'}
        name={'anchorTitle'}
        error={data['anchorTitle'] ? data['anchorTitle'].error : null}
        value={data['anchorTitle'] ? data['anchorTitle'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}

LinkingModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func,
  selectedTemplates: PropTypes.array
}

export default LinkingModal
