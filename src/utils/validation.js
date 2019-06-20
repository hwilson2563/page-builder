import Validator from 'validator'

const Validation = {
  image: data => {
    return isUrl(data)
  },
  altText: data => {
    return isNotEmpty(data)
  },
  title: data => {
    return isNotEmpty(data)
  },
  subtitle: data => {
    return isNotEmpty(data)
  }
}

function isUrl (data) {
  let isEmpty = Validator.isEmpty(data)
  if (!isEmpty) {
    let isUrl = Validator.isURL(data)
    return [isUrl, data]
  } else {
    return [false, '']
  }
}
function isNotEmpty (data) {
  let isEmpty = Validator.isEmpty(data)
  if (!isEmpty) {
    return [!isEmpty, data]
  } else {
    return [false, '']
  }
}

export const doValidation = data => {
  // get answer data
  // call the proper validation method based on data.name... then feed it data.value
  let isValid = true
  isValid = Validation[data.name](data.value)
  return isValid
}
