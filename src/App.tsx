import React, { useCallback, useState } from "react";
import {
  Click,
  Container,
  ContainerPlayer,
  GlobalStyle,
  ListMusic,
  Player,
  SearchInput,
  WrapperSearch,
} from "./styled";
type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
};

function App() {
  const [text, setText] = useState("");
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState("");
  const handleSubmit = useCallback(async () => {
    try {
      let res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC23EI1Vfurl4Cq6fxmCCF5sGNYWokiDDI&type=video&q=
          ${text}&maxResults=50`
      );
      let resJSON = await res.json();
      setVideos(resJSON.items);
    } catch (e) {
      console.log(e);
    }
  }, [text]);

  console.log(videos);

  return (
    <>
      <GlobalStyle />
      <Container>
        <WrapperSearch>
          <SearchInput
            type="search"
            value={text}
            placeholder="O que você quer ouvir?"
            onChange={({ target }) => setText(target.value)}
          />
          <button onClick={handleSubmit}>Buscar</button>
        </WrapperSearch>

        <ContainerPlayer>
          <Player>
            {id && (
              <iframe
                width="400"
                height="400"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
          </Player>

          <ListMusic>
            <ul>
              {videos &&
                videos.map((video: Video, index) => (
                  <Click
                    onClick={() => setId(video.id?.videoId)}
                    selected={id == video.id.videoId}
                  >
                    <li>
                      {index} {video.snippet.title.substring(0, 35)}
                    </li>
                  </Click>
                ))}
            </ul>
          </ListMusic>
        </ContainerPlayer>
      </Container>
    </>
  );
}

export default App;
