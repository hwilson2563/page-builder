import React from 'react'

const ButtonText = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : ''
  let callToAction = templateData.callToAction ? templateData.callToAction : 'Place a call to action text here'
  let href = templateData.href ? templateData.href : 'place link here'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel : ''
  let buttonText = templateData.buttonText ? templateData.buttonText : 'press this button'

  return (
  // <!-- START BUTTON TEXT TEMPLATE -->
    <div id='button-text-template' className={'button-text-template ' + backgroundDark + ' ' + addPadding}>
      <p className='button-text-template-text'>{callToAction}</p>
      <a className='button-link' href={href} aria-label={ariaLabel}>
        <button className='template-button'>{buttonText}</button>
      </a>
    </div>
  // <!-- END BUTTON TEXT TEMPLATE -->
  )
}

export default ButtonText
