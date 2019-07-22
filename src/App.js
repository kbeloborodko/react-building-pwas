import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://orangevalleycaa.org/api/videos').then(
        response => response.json()
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Videos</h1>
      </header>
      <div className="content">
        {data.map(video => (
          <div key={video.id} className="block">
            <h2 className="block__heading">{video.name}</h2>
            <video height={200} controls src={video.video_url}></video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
