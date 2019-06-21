import React from 'react'

const Banner = props => {
  const { templateData, id } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  const url = templateData.image ? templateData.image.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  const alt = templateData.altText ? templateData.altText.value : 'Place Title Here'
  const title = templateData.title ? templateData.title.value : 'Place Title Here'
  const subTitle = templateData.subtitle ? templateData.subtitle.value : 'Place Title Here'

  return (
    <div
      style={{
        background:
          `url(${url}) no-repeat center/cover #ebebeb`
      }}
      id={id} alt={alt} className={'banner-temp ' + backgroundDark + ' ' + addPadding}>
      <div className='banner-text'>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export default Banner
