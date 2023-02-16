import styled from 'styled-components';

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 40px 60px;
`;

export const AboutTitle = styled.div`
  width: fit-content;
  font-size: 35px;
  border-bottom: 2px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 4px;
  margin: 25px 0px;
  :hover{
    cursor: default;
  }
`;

export const AboutText = styled.div`
  font-size: 15px;
  line-height: 16px;
  text-indent: 40px;
  strong{
    background: -webkit-linear-gradient(green, yellow);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const AboutEmail = styled.div`
  font-size: 15px;
  line-height: 16px;
  text-indent: 40px;
  margin-top: 10px;
  :hover{
    cursor: pointer;
  }
`;
