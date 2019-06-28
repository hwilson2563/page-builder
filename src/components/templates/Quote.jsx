import React from 'react'
import { PropTypes } from 'prop-types'

const Quote = props => {
  const { templateData, id } = props
<<<<<<< HEAD
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
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

=======
  let defaultDisplay = !templateData['feedBackLayout'] && !templateData['faqLayout'] && !templateData['proTipLayout']
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let faqTemplate = templateData['faqLayout'] && templateData['faqLayout'].value === true
  let proTipTemplate = templateData['proTipLayout'] && templateData['proTipLayout'].value === true
  let feedbackTemplate = templateData['feedBackLayout'] && templateData['feedBackLayout'].value === true
  let title = templateData.title ? templateData.title.value : 'Frequent Question Here?'
  let answer = templateData.answer ? templateData.answer.value : 'answer here'
  let proTip = templateData.proTip ? templateData.proTip.value : 'Pro Tip Here'
  let customerFeedback = templateData.customerFeedback ? templateData.customerFeedback.value : 'feedback'
>>>>>>> a7c4a23bcb1e404f8e577a43c31051ed6a8117ea
  return (
    // <!-- START QUOTES TEMPLATE -->
    <div id={id } className={'quotes-template ' + backgroundDark + ' ' + addPadding}>
      {/* <!-- ADD/REMOVE TEMPLATES AS NEEDED -- DO NOT CHANGE OUT IMAGES-->
  <!-- QUESTION TEMPLATE STARTS --> */}
      {faqTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg'
              alt='question mark icon'
            />
            {/* <!-- start quote title --> */}
            <h3>{title}</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{answer}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- QUESTION TEMPLATE ENDS -->
  <!-- PRO TIP TEMPLATE STARTS --> */}
      {proTipTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg'
              alt='pro-tip wrench icon'
            />
            {/* <!-- start quote title --> */}
            <h3>Pro tip:</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{proTip}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- PRO TIP TEMPLATE ENDS -->
  <!-- CUSTOMER FEEDBACK TEMPLATE STARTS --> */}
      {feedbackTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'
              alt='star icon'
            />
            {/* <!-- start quote title --> */}
            <h3>customer feedback</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{customerFeedback}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {defaultDisplay && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'
              alt='star icon'
            />
            {/* <!-- start quote title --> */}
            <h3>default</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>default</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
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
