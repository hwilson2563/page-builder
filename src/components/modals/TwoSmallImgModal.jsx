import React from 'react'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'

const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const TwoSmallImgModal = props => {
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
        label={'Title'}
        name={'title'}
        error={null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        srequired
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
        name={'altText1'}
        error={null}
        value={data['altText1'] ? data['altText1'].value : ''}
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
        label={'Paragraph'}
        name={'paragraph1'}
        error={null}
        value={data['paragraph1'] ? data['paragraph1'].value : ''}
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
        label={'Paragraph'}
        name={'paragraph2'}
        error={null}
        value={data['paragraph2'] ? data['paragraph2'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default TwoSmallImgModal
