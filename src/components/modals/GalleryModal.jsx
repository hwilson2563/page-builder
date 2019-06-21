import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const StyledButton = styled.button`
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 100%;
  border: 2px solid ${props => props.theme.backgroundAccent};
  background-color: white;
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.mainPrimary};
  border-radius: 3px;
  margin-bottom: 40px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundAccent};
  }
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
      incomingDataClone.groups.splice(idx, 1)
      updateTemplateData(incomingDataClone)
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
          <StyledButton onClick={() => buildAllGalleryFields(false, idx)}>Remove</StyledButton>
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
        error={null}
        value={data['sectionHeader'] ? data['sectionHeader'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {galleryFormRender.map((gallery, idx) => createFields(idx))}
      <ButtonContainer>
        {!isMaxGalleries && <StyledButton onClick={() => buildAllGalleryFields(true)}>Add Gallery</StyledButton>}
      </ButtonContainer>
    </>
  )
}

GalleryModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default GalleryModal
