import React from 'react'
import FormEntry from '../modal/FormEntry'
const ProductListModal = props => {
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
        label={'Product Name'}
        name={'productName'}
        error={null}
        value={data['productName'] ? data['productName'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Product Page URL'}
        name={'productPage'}
        error={null}
        value={data['productPage'] ? data['productPage'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Price'}
        name={'price'}
        error={null}
        value={data['price'] ? data['price'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default ProductListModal
