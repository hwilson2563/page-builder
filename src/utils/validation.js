import Validator from 'validator'

const Validation = {
  image: data => {
    return isUrl(data)
  },
  price: data => {
    return isNumber(data)
  },
  productPage: data => {
    return isUrl(data)
  },
  video: data => {
    return isUrl(data)
  },
  href: data => {
    return isUrl(data)
  }
}

function isUrl (data) {
  let isEmpty = Validator.isEmpty(data)
  if (!isEmpty) {
    let isUrl = Validator.isURL(data, { protocols: ['http', 'https'], require_protocol: true })
    return [isUrl, '*Invalid url. Must contain https:// before www']
  } else {
    return [false, '']
  }
}
function isNumber (data) {
  let isEmpty = Validator.isEmpty(data)
  if (!isEmpty) {
    let isNumber = Validator.isDecimal(data)
    return [isNumber, '*Numbers only']
  } else {
    return [false, '']
  }
}

function isNotEmpty (data) {
  let isEmpty = Validator.isEmpty(data)
  console.log('isEmpty', isEmpty)
  if (!isEmpty) {
    return [!isEmpty, '']
  } else {
    return [false, '']
  }
}

export const doValidation = data => {
  // get answer data
  // call the proper validation method based on data.name... then feed it data.value
  let isValid = true
  let name = data.name
  name = Validator.contains(data.name, 'image') ? 'image' : name
  isValid = Validation[name] ? Validation[name](data.value) : isNotEmpty(data.value)
  console.log(data, isValid)
  return isValid
}
