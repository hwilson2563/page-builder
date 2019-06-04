// learing center js file
// remove when real code exists

'use strict'

// put image url and alt data below, in between the single quotes
// copy from the first { to the }, to add another object or remove
// if you don't want the first one to display first, change selected to false and assign the one you want to display to true
var galleryImages = [
  {
    imageSource: 'https://via.placeholder.com/700',
    altTag: 'alt tag text here',
    selected: true
  },
  {
    imageSource: 'https://via.placeholder.com/500',
    altTag: 'alt tag text here',
    selected: false
  },
  {
    imageSource: 'https://via.placeholder.com/600',
    altTag: 'alt tag text here',
    selected: false
  },
]

function handleGalleryClick (idx) {
  var selectedImage = document.getElementsByClassName('gallery-img')
  var selectedBullet = document.getElementsByClassName('bullet')

  // this finds the previously selected item and makes it false, and removes the active classes for the object
  galleryImages.forEach(function (image, index) {
    if (image.selected === true) {
      image.selected = false
      selectedImage[index].classList.remove('display-img')
      selectedBullet[index].classList.remove('active')
    }
  })

  // sets new selected and active objects
  galleryImages[idx].selected = true
  selectedImage[idx].classList.add('display-img')
  selectedBullet[idx].classList.add('active')
}
// this function populates gallery
;(function () {
  var imageContainer = document.getElementById('image-container')
  var buttonContainer = document.getElementById('bullet-container')
  galleryImages.forEach(function (image, idx) {
    // this builds the image
    var imageTag = document.createElement('img')
    imageTag.setAttribute('id', 'img' + idx)
    image.selected
      ? imageTag.setAttribute('class', 'gallery-img display-img')
      : imageTag.setAttribute('class', 'gallery-img')
    imageTag.setAttribute('src', image.imageSource)
    imageTag.setAttribute('alt', image.altTag)
    imageContainer.appendChild(imageTag)

    // this builds the button associated with the image
    var buttonElement = document.createElement('button')
    buttonElement.setAttribute('id', 'button' + idx)
    image.selected
      ? buttonElement.setAttribute('class', 'bullet active')
      : buttonElement.setAttribute('class', 'bullet')
    buttonElement.setAttribute('aria-label', 'view image number' + (idx + 1))
    buttonElement.onclick = function () {
      handleGalleryClick(idx)
    }
    buttonContainer.appendChild(buttonElement)
  })
})()
