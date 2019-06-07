import { determineScreen, addSelectedTemplates } from '../utils/utils'

describe('determineScreen return screen type based on window width', () => {
  test('Mobile screen is less than 600 window width', () => {
    expect(determineScreen(450)).toBe('mobile')
  })
  test('Tablet screen is 600 or greater window width', () => {
    expect(determineScreen(750)).toBe('tablet')
  })
  test('Tablet screen is less than 1011 window width', () => {
    expect(determineScreen(1010)).toBe('tablet')
  })
  test('Desktop screen is 1011 or greater window width', () => {
    expect(determineScreen(1300)).toBe('desktop')
  })
  test('Mobile screen is less than 740 window width', () => {
    expect(determineScreen(700, 'headerFooter')).toBe('mobile')
  })
  test('Tablet screen is less than 1010 window width', () => {
    expect(determineScreen(740, 'headerFooter')).toBe('tablet')
  })
  test('Desktop screen is more than 1010 window width', () => {
    expect(determineScreen(1011, 'headerFooter')).toBe('desktop')
  })
})

describe('addSelectedTemplates', () => {
  test('should return an array of selected templates including the added one', () => {
    let templates = ['template1', 'template2']
    let component = 'component'
    let updatedTemplates = ['template1', 'template2', 'component']
    expect(addSelectedTemplates(component, templates)).toEqual(updatedTemplates)
  })
})
