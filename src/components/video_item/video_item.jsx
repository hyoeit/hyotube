import React, {memo} from 'react'
import styles from './video_item.module.css'

const Video_item = memo(
  ({video, video: { snippet }, videoSelected, display }) => {

    const displayType = display === 'list' ? styles.list : styles.grid;
  
    return (
      <li className={`${styles.lists} ${displayType}`} onClick={()=> videoSelected(video)} >
        <img className={styles.youtubeimg} src={snippet.thumbnails.medium.url} alt="" />
        <div className={styles.textbox}>
          <h2 className={styles.title}>{snippet.title}</h2>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </li>
    )
  }
)

export default Video_item
