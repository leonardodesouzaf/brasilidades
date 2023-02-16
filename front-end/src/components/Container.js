import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: ${props => props.width || '1400px'};
  height: ${props => props.height || '100%'};
  background-color: black;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  display: flex;
  overflow: hidden;

  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;
