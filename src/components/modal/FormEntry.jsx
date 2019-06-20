import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { EntryContainer, Input, Label, TextArea } from './formEntryStyles'
// import { doValidation } from '../../../../globals/services/validation'

const FormEntry = props => {
  const { name, required, type, updateFormData, textArea } = props
  let label = props.required ? props.label : props.label + ' (Optional)'
  const [value, setValue] = useState(props.value)
  const [selected, setSelected] = useState(false)
  const [noError, setNoError] = useState(null)
  useEffect(
    () => {
      setValue(props.value)
    },
    [props.value]
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
    updateFormData({ name, value, error: isValid })
  }
  const handleChange = target => {
    let value
    if (type === 'checkbox') {
      value = target.checked
    } else {
      value = target.value
    }
    setValue(value)
  }
  return (
    <EntryContainer className={'entry-container ' + name} label={label}>
      <Label className={'entry-label'} type={type} label={label} selected={selected} value={value}>
        {label}
      </Label>
      {textArea ? (
        <TextArea
          className={'input'}
          value={value}
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
          value={value}
          onBlur={handleBlur}
          onChange={e => {
            handleChange(e.target)
          }}
          onFocus={() => {
            setNoError(true)
            setSelected(true)
          }}
          checked={type === 'checkbox' ? value : ''}
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
