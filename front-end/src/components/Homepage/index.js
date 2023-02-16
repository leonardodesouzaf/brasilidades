import styled from 'styled-components';

export const DistrictName = styled.div`
  color: white;
  font-size: 40px;
  img{
    height: 29px;
    margin-right: 10px;
  }
  :hover{
    cursor: default;
    filter: brightness(1.2);
  }
`;

export const PlaceSuggestion = styled.div`
  border: 1px solid gray;
  height: 102px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 30px;
  padding-top: 22px;
  color: gray;
  p{
    font-size: 12px;
  }
  :hover{
    color: white;
    cursor: pointer;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  right: 50px;
  top: 60px;
  font-size: 20px;
  color: lightgray;
  :hover{
    cursor: pointer;
    color: white;
  }
`;

export const ScrollAd = styled.div`
  writing-mode: vertical-rl;
  width: 30px;
  position: absolute;
  right: 10px;
  box-sizing: border-box;
  margin-top: 40px;
  color: black;
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
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ToClickDivText = styled.div`
  border: 1px solid gray;
  text-align: center;
  width: 300px;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 5px;
  :hover{
    cursor: default;
  }
  p {
    animation: color-change 1s infinite;
  }
  @keyframes color-change {
    0% { color: white; }
    50% { color: gray; }
    100% { color: white; }
  }
`;

export const ToClickDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DistrictColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 510px;
  animation: fadeIn 300ms;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 0.8; }
  }
`;

export const Line = styled.div`
  background-color: gray;
  height: 3px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Places = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scroll-margin: 0px;
  position: relative;
`;

export const Map = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1400px;
  justify-content: ${props => props.isSelectDisplay ? 'center':'space-between'};
  box-sizing: border-box;
  padding: 80px 40px;
  padding-bottom: 50px;
  position: relative;
`;

export const Slogan = styled.div`
  font-size: 16px;
  color: white;
  display: flex;
`;

export const Slogan3 = styled.div`
  margin-left: 5px;
  :hover{
    cursor: default;
    color: blue;
  }
`;

export const Slogan2 = styled.div`
  margin-left: 5px;
  :hover{
    cursor: default;
    color: #009c3b;
  }
`;

export const Slogan1 = styled.div`
  :hover{
    cursor: default;
    color: #ffdf00;
  }
`;

export const Logo = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  font-size: 60px;
  box-sizing: border-box;
  padding-top: 30px;
  p{
    color: white;
    margin-top: 8px;
  }
  img{
    height: 80px;
    margin: 0px 13px;
  }
  :hover{
    cursor: pointer;
  }
`;
