import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const GalleryModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [galleryFormRender, setGalleryFormRender] = useState(data.groups || [0])
  let isMaxGalleries = galleryFormRender.length === 5

  // this allows you to choose how many galleries in a section
  const buildAllGalleryFields = (addGallery, idx) => {
    let createdGalleries = [...galleryFormRender]
    if (addGallery) {
      createdGalleries.push(createdGalleries.length)
    } else {
      createdGalleries.pop()
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      }
    }
    setGalleryFormRender(createdGalleries)
  }
  const groups = [
    { label: 'Gallery Name Button', name: 'galleryName', type: 'input' },
    { label: 'Info Title', name: 'infoTitle', type: 'input' },
    { label: 'Info Body Text', name: 'infoBodyText', type: 'textarea' },
    { label: 'Image Url', name: 'image', type: 'input' },
    { label: 'Image Alt Text', name: 'imgAltText', type: 'input' }
  ]
  const createFields = idx => {
    return (
      <Fragment key={idx}>
        <p>Gallery {idx + 1}</p>
        {groups.map(input => {
          let valueExists = data.groups && data.groups[idx] && data.groups[idx][input.name]
          return (
            <Fragment key={input.name + idx}>
              <FormEntry
                type={input.type}
                label={input.label}
                name={input.name}
                group={idx + 1}
                error={valueExists ? data.groups[idx][input.name].error : null}
                value={valueExists ? data.groups[idx][input.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        {galleryFormRender.length > 1 && (
          <Button handleClick={() => buildAllGalleryFields(false, idx)} buttonText={'Remove'} />
        )}
      </Fragment>
    )
  }

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
        label={'Section Header'}
        name={'sectionHeader'}
        error={data['sectionHeader'] ? data['sectionHeader'].error : null}
        value={data['sectionHeader'] ? data['sectionHeader'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {galleryFormRender.map((gallery, idx) => createFields(idx))}
      <ButtonContainer>
        {!isMaxGalleries && <Button handleClick={() => buildAllGalleryFields(true)} buttonText={'Add Gallery'} />}
      </ButtonContainer>
    </>
  )
}

GalleryModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default GalleryModal
