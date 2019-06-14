import React from 'react'

const ButtonText = () => {
  return (
  // <!-- START BUTTON TEXT TEMPLATE -->
    <div id='button-text-template' className='button-text-template'>
      <p className='button-text-template-text'>place a call to action of some kind here</p>
      <a className='button-link' href='place link here' aria-label=''>
        <button className='template-button'>press this button</button>
      </a>
    </div>
  // <!-- END BUTTON TEXT TEMPLATE -->
  )
}

export default ButtonText
