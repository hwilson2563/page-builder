// learing center js file
// remove when real code exists

'use strict'

// put image url and alt data below, in between the single quotes
// copy from the first { to the }, to add another object or remove
// if you don't want the first one to display first, change selected to false and assign the one you want to display to true
var galleriesJSON = JSON.parse(document.getElementById('galleries').innerHTML)
var selectedGallery = null
var objectProperyNames = Object.getOwnPropertyNames(galleriesJSON)

function handleGalleryClick (idx, galleryName) {
  var selectedImage = document.getElementsByClassName('gallery-img')
  var selectedBullet = document.getElementsByClassName('bullet')

  // this finds the previously selected item and makes it false, and removes the active classes for the object
  galleriesJSON[galleryName].forEach(function (image, index) {
    if (image.selected === true) {
      image.selected = false
      selectedImage[index - 1].classList.remove('display-img')
      selectedBullet[index - 1].classList.remove('active')
    }
  })

  // sets new selected and active objects
  galleriesJSON[galleryName][idx].selected = true
  selectedImage[idx - 1].classList.add('display-img')
  selectedBullet[idx - 1].classList.add('active')
}

function changeGallery (galleryName) {
  var infoButtons = document.getElementsByClassName('info-button')

  // adds and removes the active css class
  Object.keys(galleriesJSON).forEach(function (gallery, index) {
    if (gallery === galleryName) {
      infoButtons[index].classList.add('active')
    } else {
      infoButtons[index].classList.remove('active')
    }
  })

  selectedGallery = galleryName
  buildGallery(galleryName)
}

function changeInfoSection (galleryName) {
  var infoHeader = document.getElementsByClassName('info-header')
  var infoBody = document.getElementById('info-body')
  Array.from(infoHeader).forEach(function (header) {
    header.innerHTML = galleriesJSON[galleryName][0].infoTitle
  })
  infoBody.innerHTML = galleriesJSON[galleryName][0].infoText
}

// this builds the whole gallery section and functionality based on JSON
function buildGallery (gallery) {
  var imageContainer = document.getElementById('image-container')
  var buttonContainer = document.getElementById('bullet-container')
  imageContainer.innerHTML = ''
  buttonContainer.innerHTML = ''

  // this loops through each gallery in the JSON
  galleriesJSON[gallery].forEach(function (image, idx) {
    if (idx !== 0) {
      // this builds the images
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
        handleGalleryClick(idx, selectedGallery)
      }
      buttonContainer.appendChild(buttonElement)
    }
  })
}

function buildGalleryButtons () {
  var buttonContainer = document.getElementById('selection-container')

  objectProperyNames.forEach(function (galleryName, idx) {
    var buttonElement = document.createElement('button')
    objectProperyNames[idx] === selectedGallery
      ? buttonElement.setAttribute('class', 'info-button active')
      : buttonElement.setAttribute('class', 'info-button')
    buttonElement.innerText = objectProperyNames[idx]
    buttonElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
    buttonElement.onclick = function () {
      changeGallery(galleryName)
      changeInfoSection(galleryName)
    }
    buttonContainer.appendChild(buttonElement)
  })
}

// this initially function populates gallery on load
;(function () {
  // this loops through JSON
  Object.values(galleriesJSON).forEach(function (gallery, index) {
    if (index === 0) {
      selectedGallery = objectProperyNames[index]
      // this loops through each gallery in the JSON
      buildGallery(selectedGallery)
      // this builds buttons
      buildGalleryButtons()
      // this builds info section
      changeInfoSection(selectedGallery)
    }
  })
})()
