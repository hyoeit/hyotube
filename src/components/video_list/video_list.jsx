import React from 'react'
import styles from './video_list.module.css'
import Video_item from '../video_item/video_item'

const Video_list = ({videos, videoSelected}) => {
  return( 
    <ul className={styles.ullist}>
      {videos.map(video => <Video_item key={video.id} video={video} videoSelected={videoSelected} />)}
    </ul>
  )
}



export default Video_list
