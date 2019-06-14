import React from 'react'

const Video = () => {
  return (
    // <!-- START VIDEO TEMPLATE -->
    <div id='video-template'>
      <div className='iframe-container'>
        {/* <!-- FOR LINK: if using a youtube link, just replace the 'watch?v=' with 'embed/' from whichever youtube video you want: so https://www.youtube.com/watch?v=ZY3J3Y_OU0w becomes what you see below --> */}
        <iframe src='https://www.youtube.com/embed/ZY3J3Y_OU0w' frameBorder='0' width='560' height='315' title='video' />
      </div>
    </div>
    // <!-- END VIDEO TEMPLATE -->
  )
}

export default Video
