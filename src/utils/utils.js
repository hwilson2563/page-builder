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
  let position = templates.length + 1
  component['position'] = position
  templates.push(component)
  return templates
}

export const editSelectedTemplates = (component, templates) => {
  let updatedTemplates = []
  templates.map(template => {
    if (template.position === component.position) {
      updatedTemplates.push(component)
    } else {
      updatedTemplates.push(template)
    }
  })
  return updatedTemplates
}
