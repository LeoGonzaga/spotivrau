import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0D081F;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  background-image: url("https://bipedepop.files.wordpress.com/2018/08/bc3adpede-pop-para-reflexc3a3o-e-relaxamento-conhec3a7a-lofi-hip-hop-um-estilo-para-introspectividade-e-para-vida-2.gif?w=1200");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapperSearch = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;

  button {
    border: 1px solid #000;
    background-color: #fff;
    height: 35px;
    width: 100px;
    margin-left: 10px;
    border-radius: 8px;
  }
`;

export const SearchInput = styled.input`
  color: #0D081F;
  background-color: #ffff;
  border: none;
  outline: 0;
  padding: 10px 25px;
  width: 400px;
  border-radius: 20px;
  height: 35px;
  font-size: 15px;
`;

export const ContainerPlayer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Player = styled.div`
  margin: 0 30px;

  iframe {
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

type Props = {
  selected: boolean;
};
export const ListMusic = styled.div`
  height: 500px;
  width: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0px;
  }

  li {
    list-style: none;
    padding: 10px;
  }
`;

export const Click = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0;
  margin-bottom: 10px;
  outline: none;
  border-radius: 4px;
  background-color: ${(props: Props) => (props.selected ? "#0D081F" : "#fff")};
  color: ${(props: Props) => (props.selected ? "#fff" : "#0D081F")};
  border: none;
`;
