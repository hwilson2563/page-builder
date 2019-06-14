import React from 'react'

const TextOnly = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title : 'place an amazing section title here'
  let paragraph = templateData.paragraph ? templateData.paragraph : 'place paragraph text here'
  return (
    // <!-- START OF TEXT ONLY TEMPLATE -->
    <div id='text-only-temp' className={backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      {/* <!-- start paragraphs here -->
  <!-- add/remove p tags as needed--> */}
      <p>{paragraph}</p>
      {/* <!-- end paragraphs here --> */}
    </div>
    // <!-- END OF TEXT ONLY TEMPLATE -->
  )
}

export default TextOnly
