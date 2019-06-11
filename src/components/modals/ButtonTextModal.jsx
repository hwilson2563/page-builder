import React from 'react'
import FormEntry from '../modal/FormEntry'
const ButtonTextModal = props => {
  const { updateFormData } = props
  return (
    <>
      <div>
        <input type={'checkbox'} name={'background'} />
        <label htmlFor={'background'}>Check for grey background</label>
      </div>
      <div>
        <input type={'checkbox'} name={'padding'} />
        <label htmlFor={'padding'}>Check for added padding</label>
      </div>
      <FormEntry
        type={'input'}
        label={'Call To Action Text'}
        name={'call-to-action'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'button'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default ButtonTextModal
