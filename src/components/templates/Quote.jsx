import React from 'react'
import { PropTypes } from 'prop-types'

const Quote = props => {
  const { templateData, id } = props
  // let defaultDisplay = !templateData['feedBackLayout'] && !templateData['faqLayout'] && !templateData['proTipLayout']
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  // let faqTemplate = templateData['faqLayout'] && templateData['faqLayout'].value === true
  let icon = templateData.icon ? templateData.icon.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg'
  let altText
  if (templateData.icon && templateData.icon.value === 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg') {
    altText = 'question mark icon'
  } else if (templateData.icon && templateData.icon.value === 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg') {
    altText = 'star icon'
  } else {
    altText = 'wrench icon'
  }
  let header = templateData.header ? templateData.header.value : 'place title here'
  let bodyText = templateData.bodyText ? templateData.bodyText.value : 'add text here'

  return (
    // <!-- START QUOTES TEMPLATE -->
    <div id={id } className={'quotes-template ' + backgroundDark + ' ' + addPadding}>
      {/* <!-- ADD/REMOVE TEMPLATES AS NEEDED -- DO NOT CHANGE OUT IMAGES-->
  <!-- QUESTION TEMPLATE STARTS --> */}
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src={icon}
              alt={altText}
            />
            {/* <!-- start quote title --> */}
            <h3>{header}</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{bodyText}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      {/* <!-- QUESTION TEMPLATE ENDS -->
      {/* <!-- CUSTOMER FEEDBACK TEMPLATE ENDS --> */}
    </div>
    /* <!-- END QUOTES TEMPLATE --> */
  )
}

Quote.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default Quote
