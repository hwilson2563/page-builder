import React from 'react'
import FormEntry from '../modal/FormEntry'
const LinkingModal = props => {
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
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph Text'}
        name={'paragraph'}
        error={null}
        value={data['paragraph'] ? data['paragraph'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* MORE LINKS CAN BE ADDED */}
      <FormEntry
        type={'input'}
        label={'Id of template you wish to link to'}
        name={'href'}
        error={null}
        value={data['href'] ? data['href'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Link Aria Label'}
        name={'ariaLabel'}
        error={null}
        value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Anchor Link Title'}
        name={'anchorTitle'}
        error={null}
        value={data['anchorTitle'] ? data['anchorTitle'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default LinkingModal
