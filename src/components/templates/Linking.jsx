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
<<<<<<< HEAD

  let paragraphs =
    templateData.groups && templateData.groups[0]
      ? Object.values(templateData.groups[0])
      : [{ value: 'place paragraph text here' }]
=======
  let paragraph = templateData.paragraph ? templateData.paragraph.value : 'Place a paragraph here'
  let link = templateData.link ? templateData.link.value : '#section-id'
  let ariaLabel = templateData.ariaLabel ? templateData.ariaLabel.value : ''
  let anchorTitle = templateData.anchorTitle ? templateData.anchorTitle.value : 'Anchor Link Title 1'
>>>>>>> ee18149cac18bd80769c20f71f7354b68b7b3b1e

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
                return <p key={idx} dangerouslySetInnerHTML={{__html: p.value}} />
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
<<<<<<< HEAD
          {templateData.groups ? (
            templateData.groups.map((link, idx) => {
              if (templateData.groups.indexOf(link) > 0) {
                let href = link.href ? link.href.value : '#section-id'
                let ariaLabel = link.ariaLabel ? link.ariaLabel.value : ''
                let anchorTitle = link.anchorTitle ? link.anchorTitle.value : 'Anchor Link Title 1'
                return (
                  <a key={idx} href={href} aria-label= {ariaLabel}>
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

=======
          <a href={link} aria-label={ariaLabel}>
            {anchorTitle}
          </a>
>>>>>>> ee18149cac18bd80769c20f71f7354b68b7b3b1e
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
