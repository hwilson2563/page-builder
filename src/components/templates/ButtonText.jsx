import React from 'react'

const ButtonText = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let callToAction = templateData.callToAction ? templateData.callToAction.value : 'Place a call to action text here'
  let href = templateData.href ? templateData.href.value : 'place link here'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel.value : ''
  let button = templateData.button ? templateData.button.value : 'press this button'

  return (
  // <!-- START BUTTON TEXT TEMPLATE -->
    <div id='button-text-template' className={'button-text-template ' + backgroundDark + ' ' + addPadding}>
      <p className='button-text-template-text'>{callToAction}</p>
      <a className='button-link' href={href} aria-label={ariaLabel}>
        <button className='template-button'>{button}</button>
      </a>
    </div>
  // <!-- END BUTTON TEXT TEMPLATE -->
  )
}

export default ButtonText
