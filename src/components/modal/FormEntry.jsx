import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Attention from './parts/Attention'
import { doValidation } from '../../utils/validation'
import { EntryContainer, Input, Label, TextArea, ErrorMessage } from './formEntryStyles'
// import { doValidation } from '../../../../globals/services/validation'

const FormEntry = props => {
  const { name, required, type, group, updateFormData, textArea } = props
  let storedValue = props.value
  let storedError = props.error
  let label = props.required ? props.label : props.label + ' (Optional)'
  const [inputValue, setValue] = useState(storedValue)
  const [selected, setSelected] = useState(false)
  const [noError, setNoError] = useState(storedError)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(
    () => {
      // update useState as prop type updates
      setNoError(storedError)
    },
    [storedError]
  )
  useEffect(
    () => {
      // update useState as prop type updates
      setValue(storedValue)
    },
    [storedValue]
  )
  const handleBlur = () => {
    let isValid = null
    if (required) {
      // validate function and setError

      let validation = doValidation({ name, value: inputValue })
      isValid = validation[0]
      setErrorMessage(validation[1])
      setNoError(isValid)
    }
    setSelected(false)
    // update higher state
    if (inputValue !== '') {
      if (group) {
        updateFormData({ name, value: inputValue, group, error: isValid })
      } else {
        updateFormData({ name, value: inputValue, error: isValid })
      }
    }
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
  const classGroup = group ? 'groups ' + group : 'input'
  return (
    <EntryContainer className={'entry-container ' + name} label={label}>
      <Label className={'entry-label'} type={type} label={label} selected={selected} value={inputValue}>
        {label}
      </Label>
      {textArea ? (
        <TextArea
          className={classGroup}
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
          className={classGroup}
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
      {noError === false && <Attention />}
      {noError === false && errorMessage.length > 1 && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
