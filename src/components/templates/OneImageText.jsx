import React from 'react'
import { PropTypes } from 'prop-types'

const OneImageText = props => {
  const { templateData, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image
    ? templateData.image.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText = templateData.altText ? templateData.altText.value : ''
  let title = templateData.title ? templateData.title.value : 'Place Title Here'

  return (
    // <!-- START ONE IMAGE-TEXT-TEMPLATE HERE-->
    <div id={id} className={'one-image-text ' + backgroundDark + ' ' + addPadding}>
      <div className='one-image-text-cont'>
        <img src={image} alt={altText} />
        <div className='text-container'>
          <h3>{title}</h3>
          {/* <!-- you can add/remove the p tags (each one represents a paragraph break) -->
    <!-- start p tags --> */}
          {templateData.groups ? (
            templateData.groups.map((item, idx) => {
              let paragraph = item.paragraph ? item.paragraph.value : 'place paragraph text here'
              return <p key={idx} dangerouslySetInnerHTML={{__html: paragraph}}/>
            })
          ) : (
            <p>{'place paragraph here'}</p>
          )}
          {/* <!-- end p tags --> */}
        </div>
      </div>
    </div>
    // <!-- END ONE IMAGE-TEXT-TEMPLATE HERE--></div>
  )
}

OneImageText.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default OneImageText
