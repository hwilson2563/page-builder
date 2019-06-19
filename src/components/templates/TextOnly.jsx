import React from 'react'

const TextOnly = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'place an amazing section title here'
  let paragraph = templateData.paragraph ? templateData.paragraph.value : 'place paragraph text here'
  return (
    // <!-- START OF TEXT ONLY TEMPLATE -->
    <div id='text-only-temp' className={backgroundDark + ' ' + addPadding}>
      <div className='text-only-temp-cont'>
        <h3>{title}</h3>
        {/* <!-- start paragraphs here -->
  <!-- add/remove p tags as needed--> */}
        <p>{paragraph}</p>
        {/* <!-- end paragraphs here --> */}
      </div>
    </div>
    // <!-- END OF TEXT ONLY TEMPLATE -->
  )
}

export default TextOnly
