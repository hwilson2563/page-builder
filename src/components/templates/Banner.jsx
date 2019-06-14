import React from 'react'

const Banner = props => {
  let { templateData } = props
  return (
    <div
      style={{
        background:
          `url(${templateData && templateData.image ? templateData.image.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'}) no-repeat center/cover #ebebeb`
      }}
      id='banner-temp' alt={templateData && templateData.altText ? templateData.altText.value : 'Place Title Here'}>
      <div className='banner-text'>
        <h1>{templateData && templateData.title ? templateData.title.value : 'Place Title Here'}</h1>
        <p>{templateData && templateData.subtitle ? templateData.subtitle.value : 'Place Title Here'}</p>
      </div>
    </div>
  )
}

export default Banner
