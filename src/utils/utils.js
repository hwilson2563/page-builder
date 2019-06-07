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
  const confirmation = window.confirm(
    'By removing this template you are removing any data filled out for this template. Once removed all data will be lost. Do you wish to continue?'
  )
  if (confirmation) {
    let removeTemplate = templates.indexOf(idx)
    templates.splice(removeTemplate, 1)
    return templates
  } else {
    return templates
  }
}
