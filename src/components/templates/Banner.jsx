import React from 'react'

const Banner = props => {
  const { templateData, id } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  const url = templateData.image ? templateData.image.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  const altText = templateData.altTextText ? templateData.altTextText.value : 'Place Title Here'
  const title = templateData.title ? templateData.title.value : 'Place Title Here'
  const subheader = templateData.subheader ? templateData.subheader.value : 'Place Title Here'

  return (
    <div
      style={{
        background:
          `url(${url}) no-repeat center/cover #ebebeb`
      }}
      id={id} alt={altText} className={'banner-temp ' + backgroundDark + ' ' + addPadding}>
      <div className='banner-text'>
        <h1>{title}</h1>
        <p>{subheader}</p>
      </div>
    </div>
  )
}

export default Banner
