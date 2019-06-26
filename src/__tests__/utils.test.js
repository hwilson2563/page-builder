import {
  determineScreen,
  removeSelectedTemplates,
  addSelectedTemplates,
  moveUpSelectedTemplates,
  moveDownSelectedTemplates,
  getEmptyInputs,
  getGroupInputs,
  getErrorData
} from '../utils/utils'

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

describe('removeSelectedTemplates removes a template from the component array', () => {
  test('remove template from array', () => {
    let idx = 1
    let templates = ['Banner', 'OneImage', 'TwoImage']
    let updatedTemplates = ['Banner', 'TwoImage']
    expect(removeSelectedTemplates(templates, idx)).toEqual(updatedTemplates)
  })
})

describe('addSelectedTemplates', () => {
  test('should return an array of selected templates including the added one', () => {
    let templates = [{ title: 'template1', data: {} }, { title: 'template2', data: {} }]
    let component = { title: 'component', data: {} }
    let updatedTemplates = [{ title: 'template1', data: {} }, { title: 'template2', data: {} }, component]
    expect(addSelectedTemplates(component, templates)).toEqual(updatedTemplates)
  })
})

describe('moveUpSelectedTemplates', () => {
  test('should return an array with the template moved up in array position', () => {
    let idx = 1
    let templates = ['Banner', 'OneImage', 'TwoImage']
    let updatedTemplates = ['OneImage', 'Banner', 'TwoImage']
    expect(moveUpSelectedTemplates(templates, idx)).toEqual(updatedTemplates)
  })
})

describe('moveDownSelectedTemplates', () => {
  test('should return an array with the template moved down in array position', () => {
    let idx = 1
    let templates = ['Banner', 'OneImage', 'TwoImage']
    let updatedTemplates = ['Banner', 'TwoImage', 'OneImage']
    expect(moveDownSelectedTemplates(templates, idx)).toEqual(updatedTemplates)
  })
})

describe('getEmptyInputs', () => {
  test('should return an object of  1 required fields', () => {
    let inputs = [{ required: true, value: 'bob', name: 'name' }, { required: true, value: '', name: 'password' }]
    let data = { name: { value: 'bob', error: true } }
    let errorInputs = { password: { value: '', error: false } }
    expect(getEmptyInputs(data, inputs)).toEqual(errorInputs)
  })
  test('should return an empty object becasue no input is required that is blank', () => {
    let inputs = [{ required: false, value: 'bob', name: 'name' }]
    let data = {}
    let errorInputs = {}
    expect(getEmptyInputs(data, inputs)).toEqual(errorInputs)
  })
})

describe('getGroupInputs', () => {
  test('should return an array of object of  2 required fields', () => {
    let groups = [
      { required: true, value: 'bob', name: 'name', classList: ['', '1'] },
      { required: true, value: '', name: 'password', classList: ['', '1'] }
    ]
    let data = { groups: [{ name: { value: 'bob', error: true } }] }
    let allGroups = [{ name: { value: 'bob', error: true }, password: { value: '', error: false } }]
    expect(getGroupInputs(data, groups)).toEqual(allGroups)
  })
  test('should return an empty array', () => {
    let inputs = []
    let data = {}
    let allGroups = []
    expect(getGroupInputs(data, inputs)).toEqual(allGroups)
  })
})

describe('getErrorData', () => {
  test('should return an array of objects with errorPresent', () => {
    let clonedGroups = [{ name: { value: 'bob', error: true }, password: { value: '', error: false } }]
    let incompleteFields = { password: { value: '', error: false } }
    let clonedData = { name: { value: 'bob', error: true } }
    let errorData = {
      clonedData: {
        name: { value: 'bob', error: true },
        password: { value: '', error: false },
        groups: [{ name: { value: 'bob', error: true }, password: { value: '', error: false } }]
      },
      errorPresent: true
    }
    expect(getErrorData(clonedData, clonedGroups, incompleteFields)).toEqual(errorData)
  })
  test('should return an array of objects with no errorPresent', () => {
    let clonedGroups = [{ password: { value: '123', error: true } }]
    let incompleteFields = {}
    let clonedData = { name: { value: 'bob', error: true } }
    let errorData = {
      clonedData: {
        name: { value: 'bob', error: true },
        groups: [{ password: { value: '123', error: true } }]
      },
      errorPresent: false
    }
    expect(getErrorData(clonedData, clonedGroups, incompleteFields)).toEqual(errorData)
  })
})
