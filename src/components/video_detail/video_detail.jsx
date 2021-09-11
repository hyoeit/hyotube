import React from 'react'
import styles from './video_detail.module.css'

const Video_detail = ({video})=> {
  return (
    <li className={styles.lists} >
    <img className={styles.youtubeimg} src={video.snippet.thumbnails.medium.url} alt="thumnail" />
    <div className={styles.textbox}>
      <h2 className={styles.title}>{video.snippet.title}</h2>
      <p className={styles.channel}>{video.snippet.channelTitle}</p>
    </div>
  </li>
  )
  }

export default Video_detail
