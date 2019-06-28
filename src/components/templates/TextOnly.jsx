import React from 'react'
import { PropTypes } from 'prop-types'

const TextOnly = props => {
  const { templateData, id } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'place an amazing section title here'
  return (
    // <!-- START OF TEXT ONLY TEMPLATE -->
    <div id={id} className={'text-only-temp ' + backgroundDark + ' ' + addPadding}>
      <div className='text-only-temp-cont'>
        <h3>{title}</h3>
        {/* <!-- start paragraphs here -->
  <!-- add/remove p tags as needed--> */}
        {templateData.groups ? (
          templateData.groups.map((item, idx) => {
            let paragraph = item.paragraph ? item.paragraph.value : 'place paragraph text here'
            return <p key={idx} dangerouslySetInnerHTML={{__html: paragraph}}/>
          })
        ) : (
          <p>{'place paragraph here'}</p>
        )}

        {/* <!-- end paragraphs here --> */}
      </div>
    </div>
    // <!-- END OF TEXT ONLY TEMPLATE -->
  )
}

TextOnly.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default TextOnly
