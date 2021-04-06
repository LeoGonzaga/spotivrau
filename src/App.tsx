import React, { useCallback, useState } from "react";

type Video = {
  id?: {
    videoId: string;
  };
};

function App() {
  const [text, setText] = useState("");
  const [videos, setVideos] = useState([]);
  const handleSubmit = useCallback(async () => {
    try {
      let res = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&key=SUAKEY&type=video&q=" +
          text
      );
      let resJSON = await res.json();
      setVideos(resJSON.items);
    } catch (e) {
      console.log(e);
    }
  }, [text]);

  console.log(text);

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button onClick={handleSubmit}>Buscar</button>
      {videos &&
        videos.map((video: Video) => (
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${video.id?.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        ))}
    </div>
  );
}

export default App;
