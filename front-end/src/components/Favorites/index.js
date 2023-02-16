import styled from 'styled-components';

export const FavoritesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 40px 60px;
`;

export const FavoritesTitle = styled.div`
  width: fit-content;
  font-size: 35px;
  border-bottom: 2px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 4px;
  margin-bottom: 25px;
  margin-top: 50px;
  :hover{
    cursor: default;
  }
`;

export const NoneFavoritesPlaces = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightgray;
  p{
    margin-bottom: 4px;
  }
  div{
    width: fit-content;
    text-align: center;
    :hover{
      color: white;
      cursor: pointer;
    }
  }
`;

export const FavoritesPlaces = styled.div`
  display: flex;
  position: relative;
`;

export const ScrollAdFav = styled.div`
  writing-mode: vertical-rl;
  width: 30px;
  box-sizing: border-box;
  color: black;
  margin-top: 10px;
  position: absolute;
  right: -30px;
  p {
    animation: color-change 1s 5;
    animation-delay: 1s;
  }
  @keyframes color-change {
    0% { color: gray; }
    50% { color: white; }
    100% { color: gray; }
  }
  :hover{
    cursor: default;
  }
`;
