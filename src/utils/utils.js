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
