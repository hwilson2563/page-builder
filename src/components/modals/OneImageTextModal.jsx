import React from 'react'
import FormEntry from '../modal/FormEntry'
const OneImageTextModal = props => {
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
        name={'imageAltText'}
        error={null}
        value={data['imageAltText'] ? data['imageAltText'].value : ''}
        updateFormData={updateFormData}
        required
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
      {/* MORE PARAGRAPHS TO BE ADDED */}
      <FormEntry
        type={'input'}
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
export default OneImageTextModal
