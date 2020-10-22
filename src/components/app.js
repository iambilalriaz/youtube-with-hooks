import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videos, search] = useVideos("react js");
  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideosList onVideoSelect={setselectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;