import React, {useRef, memo} from 'react'
import styles from './header.module.css'
import { FaYoutube, FaSearch } from "react-icons/fa";

const Header = memo(({search}) => {

    const doSearch = () => {
      const value = inputRef.current.value;
      search(value);
    }
  
    const onClick = (e) => {
      doSearch()
    }
  
    const onPress = (e) => {
      if(e.key === 'Enter'){
        doSearch();
      }
    }
  
    const inputRef = useRef();
  
  
    return (
      <div className={styles.header}>
        <FaYoutube className={styles.icon} />
        <h1 className={styles.title}>HyoTube</h1>
        <input ref={inputRef} onKeyPress={onPress} className={styles.inputPlace} type="text" placeholder="    What do you want to see?" />
        <button onClick={onClick} className={styles.search}><FaSearch /></button>
      </div>
    )
  }
)

export default Header
