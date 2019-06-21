import React from 'react'
import { PropTypes } from 'prop-types'

const SingleButton = props => {
  const { templateData, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let href = templateData.href ? templateData.href.value : 'place link here'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel.value : ''
  let buttonText = templateData.buttonText ? templateData.buttonText.value : 'press this button'

  return (
  // <!-- START SINGLE BUTTON -->

    <div id={id} className={'button-text-template ' + backgroundDark + ' ' + addPadding}>
      <a className='button-link' href={href} aria-label={ariaLabel}>
        <button className='template-button'>{buttonText}</button>
      </a>
    </div>

  // <!-- END SINGLE BUTTON -->
  )
}

SingleButton.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default SingleButton
