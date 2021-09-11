import React from 'react'
import styles from './video_detail.module.css'

const Video_detail = ({video})=> {

  console.log(video)

  return (
    <section>
      <iframe
        className={styles.video} 
        title="youtubeIframe"
        id="ytplayer" 
        type="text/html" 
        width="100%" 
        height="900"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <h2 className={styles.title} >{video.snippet.title}</h2>
      <h3 className={styles.channel} >{video.snippet.channelTitle}</h3>
    </section>
  )
  }

export default Video_detail
