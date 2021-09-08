import React from 'react'

const Video_item = (props) => {
  return (
    <div>
      <h1>{props.video.snippet.title}</h1>
    </div>
  )
}

export default Video_item
