import styled from 'styled-components';
import Container from '../Container';

export const Slogan = styled.div`
  width: 100%;
  margin-right: 100px;
  font-size: 20px;
  color: white;
  margin-bottom: 50px;
  :hover{
    cursor: default;
  }
  animation: fade-slogan 4s infinite;
  @keyframes fade-slogan {
    0% { color: black; }
    25% { color: white; }
    75% { color: white; }
    100% { color: black; }
  }
`;

export const Logo = styled.div`
  display: flex;
  font-size: 60px;
  margin-top: 10px;
  background-color: black;
  border-radius: 15px;
  p{
    color: white;
    margin-top: 8px;
  }
  img{
    height: 80px;
    margin: 0px 13px;
  }
  :hover{
    cursor: default;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const StyledContainer = styled(Container)`
  height: 100vh;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 80px;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 10px 0;
`;

export const Label = styled.h1`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  p{
    color: white;
    :hover{
      text-decoration: underline;
    }
  }
  form{
    width: 100%;
    Button{
      text-transform: none;
      background: white;
      color: black;
      height: 40px;
      font-family: "Lexend Deca", sans-serif;
      :hover{
        background-color: gray;
        color: white;
      }
    }
    Input{
      color: white !important;
      background-color: black;
    }
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const Subtitle = styled.h1`
font-size: 14px;
color: white;
white-space: nowrap;
margin: 0 10px;
:hover{
    cursor: default;
  }
`;

export const Divider = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
`;

export const Line = styled.span`
width: 100%;
height: 1px;
background-color: white;
opacity: 0.3;
`;

export const OAuthWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 20px;

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

animation: fade-in .5s;
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;

export const LogoWrapper = styled.span`
background-color: ${props => {if(props.name === 'Google') return 'rgb(222,42,40)'; if(props.name === 'GitHub') return 'rgb(27,31,34)'; if(props.name === 'Facebook') return 'rgb(23,93,240)'; }};
color: white;
width: 100%;
height: 40px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 5px;
p{
  margin-right: 10px;
}
img{
  margin-left: 10px;
  height: 24px;
  object-fit: contain;
} 
:hover{
  filter: brightness(140%);
}
`;
