import React from 'react'

const SingleButton = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : ''
  let href = templateData.href ? templateData.href : 'place link here'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel : ''
  let buttonText = templateData.buttonText ? templateData.buttonText : 'press this button'

  return (
  // <!-- START SINGLE BUTTON -->

    <div id='button-text-template' className={'button-text-template ' + backgroundDark + ' ' + addPadding}>
      <a className='button-link' href={href} aria-label={ariaLabel}>
        <button className='template-button'>{buttonText}</button>
      </a>
    </div>

  // <!-- END SINGLE BUTTON -->
  )
}

export default SingleButton
