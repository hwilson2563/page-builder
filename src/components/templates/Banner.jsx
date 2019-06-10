import React from 'react'

const Banner = () => {
  return (
    // <!-- START BANNER TEMPLATE -->
    // <!-- for a different background image, replace the link in quotes -->
    <div
      style={{
        backgroundImage: `url('https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg')`
      }}
      id='banner-temp'>
      <div className='banner-text'>
        <h1>place title here</h1>
        <p>place subheading text here</p>
      </div>
    </div>
    // <!-- END BANNER TEMPLATE -->
  )
}

export default Banner
