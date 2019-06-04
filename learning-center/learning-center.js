// learing center js file
// remove when real code exists

'use strict'

// put image url and alt data below, in between the single quotes
// copy from the first { to the }, to add another object or remove
const galleryImages = [
  {
    imageSource: 'https://via.placeholder.com/300',
    altTag: 'alt tag text here',
    selected: true
  },
  {
    imageSource: 'https://via.placeholder.com/300',
    altTag: 'alt tag text here',
    selected: false
  },
  {
    imageSource: 'https://via.placeholder.com/300',
    altTag: 'alt tag text here',
    selected: false
  }
]

// this function populates gallery
const pageSetup = () => {
  const imageContainer = document.getElementById('image-container')
  const buttonContainer = document.getElementById('bullet-container')
  galleryImages.forEach((image, idx) => {
    // this builds the image
    let imageTag = document.createElement('img')
    imageTag.setAttribute('id', 'img' + idx)
    image.selected ? imageTag.setAttribute('class', 'gallery-img display-img') : imageTag.setAttribute('class', 'gallery-img')
    imageTag.setAttribute('src', image.imageSource)
    imageTag.setAttribute('alt', image.altTag)
    imageTag.setAttribute('index', idx)
    imageContainer.append(imageTag)

    // this builds the button associated with the image
    let buttonElement = document.createElement('button')
    buttonElement.setAttribute('id', 'button' + idx)
    image.selected ? buttonElement.setAttribute('class', 'bullet active') : buttonElement.setAttribute('class', 'bullet')
    buttonElement.setAttribute('aria-label', 'view image number' + (idx + 1))
    buttonElement.setAttribute('index', idx)
    buttonContainer.append(buttonElement)
  })
}
pageSetup()
