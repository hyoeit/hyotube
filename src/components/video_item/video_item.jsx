import React from 'react'

const Video_item = ({video}) => {
  return (
    <div>
      <h1>{video.snippet.title}</h1>
    </div>
  )
}

export default Video_item
