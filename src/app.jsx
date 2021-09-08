import "./app.css";
import React, {useState, useEffect} from 'react';
import Video_list from './components/video_list/video_list';

function App() {
  
  const [videos, setVideos] = useState();

  useEffect( () => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAC6ynS06PUlJjXrl5XToBXGCU2aYrCMEs&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAC6ynS06PUlJjXrl5XToBXGCU2aYrCMEs", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <Video_list videos={videos} />
  );
}

export default App;
