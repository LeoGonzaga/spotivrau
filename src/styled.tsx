import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const WrapperSearch = styled.div`
  display: flex;
  margin: 20px 0;


  button{
    border:1px solid #000;
    background-color: #fff;
    height: 35px;
    width: 150px;
    margin-left: 10px;
  }
`;

export const SearchInput = styled.input`
  color: #ccc;
  border: none;
  outline: 0;
  border-bottom: 1px solid #ccc;
  width: 400px;
`;

export const ContainerPlayer = styled.div`
  display: flex;
  width: 800px;
  height: 50%;

  align-items: center;
`;

export const Player = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 50%;
  height: 300px;
  margin: 0 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ListMusic = styled.div`
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  li{
    margin-bottom: 10px;
    list-style: none;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
