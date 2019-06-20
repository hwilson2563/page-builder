import React from 'react'

const SingleButton = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let href = templateData.href ? templateData.href.value : 'place link here'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel.value : ''
  let buttonText = templateData.buttonText ? templateData.buttonText.value : 'press this button'

  return (
  // <!-- START SINGLE BUTTON -->

    <div id='button-text-template' className={'button-text-template ' + backgroundDark + ' ' + addPadding}>
      <a className='button-link' href={href} ariaLabel={ariaLabel}>
        <button className='template-button'>{buttonText}</button>
      </a>
    </div>

  // <!-- END SINGLE BUTTON -->
  )
}

export default SingleButton
