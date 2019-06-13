import { theme } from './globalStyles'

export const determineScreen = (width, headerFooter) => {
  let screen
  // sets the main breakpoints for header and footer
  if (headerFooter) {
    if (width < theme.tabletHeader) {
      screen = 'mobile'
    } else if (width < theme.desktop) {
      screen = 'tablet'
    } else {
      screen = 'desktop'
    }
    // sets the breakpoints for everything else
  } else {
    if (width < theme.tablet) {
      screen = 'mobile'
    } else if (width < theme.desktop) {
      screen = 'tablet'
    } else {
      screen = 'desktop'
    }
  }
  return screen
}

export const removeSelectedTemplates = (templates, idx) => {
  templates.splice(idx, 1)
  return templates
}

export const addSelectedTemplates = (component, templates) => {
  templates.push(component)
  return templates
}

export const moveUpSelectedTemplates = (templates, idx) => {
  let newLocation = idx - 1
  templates.splice(newLocation, 0, templates.splice(idx, 1)[0])
  return templates
}

export const moveDownSelectedTemplates = (templates, idx) => {
  let newLocation = idx + 1
  templates.splice(newLocation, 0, templates.splice(idx, 1)[0])
  return templates
}

// template functionality //
export const showMore = button => {
  var parentElement = button.parentElement
  parentElement.classList.toggle('more')
  if (button.textContent === 'read more') {
    button.textContent = 'read less'
  } else {
    button.textContent = 'read more'
  }
}
// display read more button only in tablet and only if height is larger than 300px
export const readMore = () => {
  var inTabletView = window.innerWidth < 1020 && window.innerWidth > 740
  if (inTabletView) {
    var readMoreContainer = document.getElementsByClassName('read-more-container')
    if (readMoreContainer && readMoreContainer.length > 0) {
      for (var x = 0; x < readMoreContainer.length; x++) {
        var paragraghs = readMoreContainer[x].children
        var paragraphsHeight = 0
        for (var y = 0; y < paragraghs.length; y++) {
          var heightIncludesMargin = paragraghs[y].offsetHeight + 20
          paragraphsHeight += heightIncludesMargin
        }
        if (paragraphsHeight >= 300) {
          var parentDiv = readMoreContainer[x].parentElement
          parentDiv.classList.add('read')
        }
      }
    }
  }
}

export const addReadMoreClicks = () => {
  readMore()
  var readMoreButtons = document.getElementsByClassName('read-more-button')
  if (readMoreButtons && readMoreButtons.length > 0) {
    for (var x = 0; x < readMoreButtons.length; x++) {
      readMoreButtons[x].addEventListener('click', function () {
        showMore(this)
      })
    }
  }
}

export const buildGallery = () => {
  var galleryIndex

  var galleriesHTMLCollection = document.getElementsByClassName('gallery-templates')
  var galleriesJSON = document.getElementById('galleries')
  var activeGalleryButton
  var galleryPosition
  var imageContainer
  var bulletContainer
  var buttonContainer

  if (galleriesJSON !== null && galleriesJSON) {
    galleryIndex = galleriesHTMLCollection.length - 1
    galleriesJSON.id = galleriesHTMLCollection
      ? 'galleries' + galleriesHTMLCollection.length
      : 'galleries' + galleryIndex

    imageContainer = document.getElementsByClassName('image-container')[galleryIndex]
    bulletContainer = document.getElementsByClassName('bullet-container')[galleryIndex]
    buttonContainer = document.getElementsByClassName('selection-container-btn')[galleryIndex]

    galleriesJSON = JSON.parse(document.getElementById(galleriesJSON.id).innerText)
  } else {
    galleriesJSON = false
  }
  var selectedGallery = null // currently selected gallery to display
  var objectProperyNames = Object.getOwnPropertyNames(galleriesJSON) // name of each gallery in JSON

  // when I gallery is selected, this runs.
  const handleGalleryClick = (idx, galleryName) => {
    var selectedImage = document.getElementsByClassName('gallery-img')
    var selectedBullet = document.getElementsByClassName('bullet')

    // this finds the previously selected item and makes it false, and removes the active classes for the object
    galleriesJSON[galleryName].forEach(function (image, index) {
      var isSelectedImage = image.selected === true
      var galleryIdx = index - 1
      if (isSelectedImage) {
        image.selected = false
        selectedImage[galleryIdx].classList.remove('display-img')
        selectedBullet[galleryIdx].classList.remove('active')
      }
    })

    // sets new selected and active objects
    var activeGalleryIdx = idx - 1
    galleriesJSON[galleryName][idx].selected = true
    selectedImage[activeGalleryIdx].classList.add('display-img')
    selectedBullet[activeGalleryIdx].classList.add('active')
  }

  // in mobile and tablet, this updates the selected gallery buttons in the drop down
  function updateActiveGallery (galleryButtonIdx) {
    var selectedGallerySection = document.getElementsByClassName('selected-gallery')
    selectedGallerySection[galleryPosition].innerText = objectProperyNames[galleryButtonIdx]
  }

  // upon click, this updates the page to the selected gallery
  const changeGallery = (galleryName, idx) => {
    var className = galleryName + galleryIndex + idx
    var newActiveGalleryButton = document.getElementsByClassName(className)

    // adds and removes the active css class
    Object.keys(galleriesJSON).forEach(function (gallery, index) {
      var galleryIsCurrentlySetAsActive = gallery === galleryName
      if (galleryIsCurrentlySetAsActive) {
        activeGalleryButton[0].classList.remove('active')
        activeGalleryButton = newActiveGalleryButton
        newActiveGalleryButton[0].classList.add('active')
        updateActiveGallery(index)
      }
    })

    // update and build gallery
    selectedGallery = galleryName
    buildGallery(galleryName)
  }

  // this updates the info section with the new gallery info
  const changeInfoSection = galleryName => {
    var infoIndex = galleryIndex * 2 // time two because each section has two infoIndex
    var infoHeader = document.getElementsByClassName('info-header')
    var infoBody = document.getElementsByClassName('info-body')[galleryIndex]

    var headersArray = [infoHeader[infoIndex], infoHeader[infoIndex + 1]] // this is because of IE

    headersArray.forEach(function (header) {
      header.innerHTML = galleriesJSON[galleryName][0].infoTitle
    })
    infoBody.innerHTML = galleriesJSON[galleryName][0].infoText
  }

  // this builds the whole gallery section and functionality based on JSON
  const buildGallery = gallery => {
    imageContainer.innerHTML = ''
    bulletContainer.innerHTML = ''

    // this loops through each gallery in the JSON
    galleriesJSON[gallery].forEach(function (image, idx) {
      var isValidImage = idx !== 0
      if (isValidImage) {
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
        buttonElement.setAttribute('aria-label', 'view image number ' + idx)
        buttonElement.onclick = function () {
          handleGalleryClick(idx, selectedGallery)
        }
        bulletContainer.appendChild(buttonElement)
      }
    })
  }

  // this builds each gallery option for the user to select
  const buildGalleryButtons = () => {
    galleryPosition = galleriesHTMLCollection.length - 1
    objectProperyNames.forEach(function (galleryName, idx) {
      var isActiveGallery = objectProperyNames[idx] === selectedGallery
      // this creates buttons for desktop
      var buttonElement = document.createElement('button')
      isActiveGallery
        ? buttonElement.setAttribute('class', `info-button ${galleryName + galleryIndex + idx} active`)
        : buttonElement.setAttribute('class', `info-button ${galleryName + galleryIndex + idx}`)
      buttonElement.innerText = objectProperyNames[idx]
      buttonElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      buttonElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      // this creates styled dropdown for mobile
      var dropDownElement = document.createElement('button')
      dropDownElement.setAttribute('class', `dropdown-button  ${galleryName + galleryIndex + idx}`)
      dropDownElement.innerText = objectProperyNames[idx]
      dropDownElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      dropDownElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      buttonContainer.appendChild(buttonElement)
      buttonContainer.appendChild(dropDownElement)

      if (idx === 0) {
        // sets the initial active button in the gallery for changing later
        // GalleryName + indx of which gallery is being build + indx of button within gallery
        // example: GalleryName10
        activeGalleryButton = document.getElementsByClassName(
          objectProperyNames[0] + (galleryPosition) + '0'
        )
      }
      // this populates the selected gallery button in dropdown
      if (isActiveGallery) {
        updateActiveGallery(idx)
      }
    })
  }

  // this initially function populates gallery on load
  // only begins build is galleriesJSON is not false
  if (galleriesJSON) {
    // have to do this because of IE >:[
    var galleryValues = Object.keys(galleriesJSON).map(function (gallery) {
      return galleriesJSON[gallery]
    })

    // this loops through array of galleries
    galleryValues.forEach(function (gallery, index) {
      var onlyRunForFirstGallery = index === 0
      if (onlyRunForFirstGallery) {
        selectedGallery = objectProperyNames[index]
        // this loops through each gallery in the JSON
        buildGallery(selectedGallery)
        // this builds buttons
        buildGalleryButtons()
        // this builds info section
        changeInfoSection(selectedGallery)
      }
    })
  }
}
