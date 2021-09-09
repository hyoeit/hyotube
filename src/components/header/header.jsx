import React from 'react'
import styles from './header.module.css'
import { FaYoutube, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <FaYoutube className={styles.icon} />
      <h1 className={styles.title}>HyoTube</h1>
      <input className={styles.inputPlace} type="text" placeholder="What do you want to see?" />
      <button className={styles.search}><FaSearch /></button>
    </div>
  )
}

export default Header
