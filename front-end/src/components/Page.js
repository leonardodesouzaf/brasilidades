import styled from 'styled-components';
import vnbBackground from '../assets/images/background.jpg';

export default styled.div`
  background: url(${vnbBackground});
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 48px;
  box-sizing: border-box;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
