import React from 'react'
import FormEntry from '../modal/FormEntry'
const ProductListModal = props => {
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
      <FormEntry type={'input'} label={'Image'} name={'image'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry type={'input'} label={'Title'} name={'title'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Product Name'}
        name={'product-name'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry type={'input'} label={'Price'} name={'price'} error={null} updateFormData={updateFormData} required />
    </>
  )
}
export default ProductListModal
