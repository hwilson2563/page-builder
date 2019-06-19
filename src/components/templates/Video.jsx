import React from 'react'

const Video = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  const convertVideo = video => {
    return video.replace('watch?v=', 'embed/')
  }
  let video = templateData.video ? convertVideo(templateData.video.value) : 'https://www.youtube.com/embed/ZY3J3Y_OU0w'

  return (
    // <!-- START VIDEO TEMPLATE -->
    <div id='video-template' className={backgroundDark + ' ' + addPadding}>
      <div className='video-template-cont'>
        <div className='iframe-container'>
          {/* <!-- FOR LINK: if using a youtube link, just replace the 'watch?v=' with 'embed/' from whichever youtube video you want: so https://www.youtube.com/watch?v=ZY3J3Y_OU0w becomes what you see below --> */}
          <iframe src={video} frameBorder='0' width='560' height='315' title='video' />
        </div>
      </div>
    </div>
    // <!-- END VIDEO TEMPLATE -->
  )
}

export default Video
