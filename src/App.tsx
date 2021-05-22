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
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&type=video&q=
          ${text}&maxResults=50`
        );
        let resJSON = await res.json();
        setVideos(resJSON.items);
      } catch (e) {
        console.log(e);
      }
    },
    [text]
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <WrapperSearch onSubmit={handleSubmit}>
          <SearchInput
            type="search"
            value={text}
            placeholder="O que você quer ouvir?"
            onChange={({ target }) => setText(target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Buscar
          </button>
        </WrapperSearch>

        <ContainerPlayer>
          <Player>
            {id && (
              <iframe
                width="400"
                height="400"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                frameBorder="0"
                allow=" autoplay; picture-in-picture"
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
                    key={index}
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
