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
      <FormEntry type={'input'} label={'Image'} name={'image'} error={null} updateFormData={updateFormData} required />
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
        updateFormData={updateFormData}
        value={data['title'] ? data['title'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText'}
        error={null}
        value={data['bodyText'] ? data['bodyText'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* MORE LINKS CAN BE ADDED */}
      <FormEntry
        type={'input'}
        label={'ClassName of template you wish to link to'}
        name={'link'}
        error={null}
        value={data['link'] ? data['link'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Link Aria Label'}
        name={'linkAriaLabel'}
        error={null}
        value={data['linkAriaLabel'] ? data['linkAriaLabel'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default LinkingModal
