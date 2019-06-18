import React from 'react'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'

const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const ThreeImageModal = props => {
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
      <Section>First Image Form</Section>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'alt1'}
        error={null}
        value={data['alt1'] ? data['alt1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader1'}
        error={null}
        value={data['subheader1'] ? data['subheader1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Body Text'}
        name={'bodyText1'}
        error={null}
        value={data['bodyText1'] ? data['bodyText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <Section>Second Image Form</Section>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'alt2'}
        error={null}
        value={data['alt2'] ? data['alt2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader2'}
        error={null}
        value={data['subheader2'] ? data['subheader2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Body Text'}
        name={'bodyText2'}
        error={null}
        value={data['bodyText2'] ? data['bodyText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* Third Img Temp */}
      <Section>Third Image Form</Section>
      <FormEntry
        type={'input'}
        label={'Image 3'}
        name={'image3'}
        error={null}
        value={data['image3'] ? data['image3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'alt3'}
        error={null}
        value={data['alt3'] ? data['alt3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader3'}
        error={null}
        value={data['subheader3'] ? data['subheader3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Body Text'}
        name={'bodyText3'}
        error={null}
        value={data['bodyText3'] ? data['bodyText3'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default ThreeImageModal
