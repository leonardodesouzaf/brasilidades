import styled from 'styled-components';

export const ConfirmDeleteButton = styled.div`
  background-color: darkred;
  color: white;
  border: 1px solid darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 10px;
  width: 49.5%;
  :hover{
    cursor: pointer;
    border: 1px solid red;
    background-color: red;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const ConfirmDeleteButtonCancel = styled.div`
  background-color: black;
  color: lightgray;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 10px;
  width: 49.5%;
  :hover{
    cursor: pointer;
    border: 1px solid white;
    background-color: white;
    color: black;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const ConfirmDeleteFlexing = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CancelButton = styled.div`
  background-color: darkred;
  color: lightgray;
  border: 1px solid darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 225px;
  :hover{
    background-color: red;
    border: 1px solid red;
    color: white;
    cursor: pointer;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const ConfirmButton = styled.div`
  background-color: darkgreen;
  color: white;
  border: 1px solid darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 225px;
  :hover{
    background-color: green;
    border: 1px solid green;
    color: white;
    cursor: pointer;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const SettingsInput = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 225px;
  color: white !important;
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const SettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 85vh;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 40px 60px;
`;

export const SettingsTitle = styled.div`
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

export const SettingsSubtitle = styled.div`
  width: fit-content;
  font-size: 25px;
  border-bottom: 1px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 3px;
  margin: 25px 0px;
  :hover{
    cursor: default;
  }
`;

export const SettingsPasswordSubtitle = styled.div`
  width: fit-content;
  font-size: 25px;
  border-bottom: 1px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 3px;
  margin: 25px 0px;
  margin-right: 5px;
  :hover{
    cursor: default;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

export const Spacing = styled.div`
  height: 200px;
`;

export const ChangeButton = styled.div`
  background-color: black;
  color: lightgray;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 225px;
  :hover{
    background-color: white;
    border: 1px solid white;
    color: black;
    cursor: pointer;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const DeleteButton = styled.div`
  background-color: darkred;
  color: lightgray;
  border: 1px solid darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 10px;
  :hover{
    background-color: red;
    color: white;
    border: 1px solid red;
    cursor: pointer;
  }
  animation: fade-in .5s;
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
