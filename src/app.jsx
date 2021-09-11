
import styles from './app.module.css';
import React, {useState, useEffect} from 'react';
import Video_list from './components/video_list/video_list';
import Header from './components/header/header';
import Video_detail from './components/video_detail/video_detail';


function App({youtube}) {
  
  const [videos, setVideos] = useState([]);
  const [clicked, setClicked] = useState(null);

  useEffect( () => {
    youtube.mostPopular()//
    .then((items) => setVideos(items));
  }, [])


  const search = (value) => {
    youtube.search(value)//
    .then((items) => setVideos(items));
  }

  const videoSelected = (video) => {
    setClicked(video);
  }

  return (
    <>
      <Header search={search} />
      <div className={styles.container}>
        {clicked && (
          <div className={styles.videodetail}>
            <Video_detail video={clicked} /> 
          </div>
        )}
        <div className={styles.videolist}>
          <Video_list videos={videos} videoSelected={videoSelected} />
        </div>
      </div>
    </>
  );
}

export default App;
