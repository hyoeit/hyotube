import React from 'react'
import styles from './video_item.module.css'

const Video_item = ({video, video: { snippet }, videoSelected }) => {

  return (
    <li className={styles.lists} onClick={()=> videoSelected(video)} >
      <img className={styles.youtubeimg} src={snippet.thumbnails.medium.url} alt="" />
      <div className={styles.textbox}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  )
}

export default Video_item
