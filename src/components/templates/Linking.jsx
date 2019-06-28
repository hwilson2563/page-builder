import React from 'react'
import { PropTypes } from 'prop-types'

const Linking = props => {
  const { templateData, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image
    ? templateData.image.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText = templateData.altText ? templateData.altText.value : ''
  let title = templateData.title ? templateData.title.value : 'Place Title Here'

  let paragraphs =
    templateData.groups && templateData.groups[0]
      ? Object.values(templateData.groups[0])
      : [{ value: 'place paragraph text here' }]

  return (
    // <!-- START OF LINKING TEMPLATE -->
    <div id={id} className={'linking-temp ' + backgroundDark + ' ' + addPadding}>
      <div className='linking-temp-cont'>
        <div className='image-text-container'>
          <img src={image} alt={altText} />
          <div className='linking-text-container'>
            <h3>{title}</h3>
            {/* <!-- below add/remove p tags for more/less paragraph breaks --> */}
            <div className='linking-text'>
              {/* <!-- BEGINNING OF PARAGRAPH SECTION --> */}
              {paragraphs.map((p, idx) => {
                return <p key={idx} dangerouslySetInnerHTML={{ __html: p.value }} />
              })}
              {/* <!-- END OF PARAGRAPH SECTION --> */}
            </div>
          </div>
        </div>
        <div className='linking-guide'>
          {/* <!-- below are links to sections of your page -->
        <!-- replace each #section-id with the section's id you wish to link to  -->
        <!-- max of 6 links allowed, remove any a tag not used -->
        <!-- START OF ANCHOR SECTION --> */}
          {templateData.groups ? (
            templateData.groups.map((item, idx) => {
              if (templateData.groups.indexOf(item) > 0) {
                let link = item.link ? item.link.value : '#section-id'
                let ariaLabel = item.ariaLabel ? item.ariaLabel.value : ''
                let anchorTitle = item.anchorTitle ? item.anchorTitle.value : 'Anchor Link Title 1'
                debugger
                return (
                  <a key={idx} href={link} aria-label={ariaLabel}>
                    {anchorTitle}
                  </a>
                )
              }
            })
          ) : (
            <a href='#section-id' aria-label=''>
              Anchor Link Title 1
            </a>
          )}

          {/* <!-- END OF ANCHOR SECTION --> */}
        </div>
      </div>
    </div>
    // <!-- END OF LINKING TEMPLATE -->
  )
}

Linking.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default Linking
