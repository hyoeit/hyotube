import "./app.css";
import React, {useState, useEffect} from 'react';
import Video_list from './components/video_list/video_list';
import Header from './components/header/header';

function App({youtube}) {
  
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    youtube.mostPopular()//
    .then((items) => setVideos(items));
  }, [])


  const search = (value) => {
    youtube.search(value)//
    .then((items) => setVideos(items));
  }

  return (
    <>
      <Header search={search} />
      <Video_list videos={videos} />
    </>
  );
}

export default App;
