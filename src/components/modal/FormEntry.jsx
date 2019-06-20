import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { EntryContainer, Input, Label, TextArea } from './formEntryStyles'
// import { doValidation } from '../../../../globals/services/validation'

const FormEntry = props => {
  let { name, required, type, updateFormData, textArea } = props
  let storedValue = props.value
  let label = props.required ? props.label : props.label + ' (Optional)'
  const [inputValue, setValue] = useState(storedValue)
  const [selected, setSelected] = useState(false)
  const [noError, setNoError] = useState(null)
  useEffect(
    () => {
      setValue(storedValue)
    },
    [storedValue]
  )
  const handleBlur = () => {
    let isValid = null
    if (required) {
      // validate function and setError
      // let validation //= doValidation({ name, value })
      // isValid = !validation[0]
      // setNoError(!isValid)
    }
    setSelected(false)
    // update higher state
    updateFormData({ name, value: inputValue, error: isValid })
  }
  const handleChange = target => {
    let newValue
    if (type === 'checkbox') {
      newValue = target.checked
    } else {
      newValue = target.value
    }
    setValue(newValue)
  }
  return (
    <EntryContainer className={'entry-container ' + name} label={label}>
      <Label className={'entry-label'} type={type} label={label} selected={selected} value={inputValue}>
        {label}
      </Label>
      {textArea ? (
        <TextArea
          className={'input'}
          value={inputValue}
          onBlur={handleBlur}
          onChange={e => setValue(e.target.value)}
          onFocus={() => {
            setNoError(true)
            setSelected(true)
          }}
          type={type}
          name={name}
          required={required}
          error={noError}
        />
      ) : (
        <Input
          className={'input'}
          value={inputValue}
          onBlur={handleBlur}
          onChange={e => {
            handleChange(e.target)
          }}
          onFocus={() => {
            setNoError(true)
            setSelected(true)
          }}
          checked={type === 'checkbox' ? inputValue : ''}
          type={type}
          name={name}
          required={required}
          error={noError}
        />
      )}
    </EntryContainer>
  )
}

FormEntry.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  updateFormData: PropTypes.func,
  textArea: PropTypes.bool
}

export default FormEntry
