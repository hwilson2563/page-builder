import React from 'react'
import FormEntry from '../modal/FormEntry'
const TextOnly = props => {
  const { updateFormData, data } = props
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
        error={null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph'}
        name={'paragraph'}
        error={null}
        value={data['paragraph'] ? data['paragraph'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default TextOnly
