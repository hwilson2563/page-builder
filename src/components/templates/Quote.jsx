import React from 'react'

const Quote = props => {
  const { templateData } = props
  let defaultDisplay = !templateData['feedBackLayout'] && !templateData['faqLayout'] && !templateData['proTipLayout']
  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'
  let faq = templateData.faq ? templateData.faq.value : 'Frequent Question Here?'
  let answer = templateData.answer ? templateData.answer.value : 'answer here'
  let proTip = templateData.proTip ? templateData.proTip.value : 'Pro Tip Here'
  let customerFeedback = templateData.customerFeedback ? templateData.customerFeedback.value : 'feedback'
  return (
    // <!-- START QUOTES TEMPLATE -->
    <div id='quotes-template' className={backgroundDark + ' ' + addPadding}>
      {/* <!-- ADD/REMOVE TEMPLATES AS NEEDED -- DO NOT CHANGE OUT IMAGES-->
  <!-- QUESTION TEMPLATE STARTS --> */}
      {templateData['faqLayout'] && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg'
              alt='question mark icon'
            />
            {/* <!-- start quote title --> */}
            <h3>{faq}</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{answer}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- QUESTION TEMPLATE ENDS -->
  <!-- PRO TIP TEMPLATE STARTS --> */}
      {templateData['proTipLayout'] && (
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
      {templateData['feedBackLayout'] && (
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
          <p>text here</p>
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
            <h3>customer feedback</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{customerFeedback}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- CUSTOMER FEEDBACK TEMPLATE ENDS --> */}
    </div>
    /* <!-- END QUOTES TEMPLATE --> */
  )
}

export default Quote
