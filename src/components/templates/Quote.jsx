import React from 'react'
import { PropTypes } from 'prop-types'

const Quote = props => {
  const { templateData, id } = props
  // let defaultDisplay = !templateData['feedBackLayout'] && !templateData['faqLayout'] && !templateData['proTipLayout']
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  // let faqTemplate = templateData['faqLayout'] && templateData['faqLayout'].value === true
  let icon
  let altText
  if (templateData.proTipIcon && templateData.proTipIcon.value) {
    icon = 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg'
    altText = 'pro-tip wrench icon'
  } else if (templateData.questionIcon && templateData.questionIcon.value) {
    icon = 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg'
    altText = 'question mark icon'
  } else {
    icon = 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'
    altText = 'star icon'
  }
  let header = templateData.header ? templateData.header.value : 'place title here'
  let bodyText = templateData.bodyText ? templateData.bodyText.value : 'add text here'

  // let feedbackTemplate = templateData['feedBackLayout'] && templateData['feedBackLayout'].value === true
  // let title = templateData.title ? templateData.title.value : 'Frequent Question Here?'
  // let answer = templateData.answer ? templateData.answer.value : 'answer here'
  // let proTip = templateData.proTip ? templateData.proTip.value : 'Pro Tip Here'
  // let customerFeedback = templateData.customerFeedback ? templateData.customerFeedback.value : 'feedback'
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
