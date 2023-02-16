import React, { useContext } from 'react';
import styled from 'styled-components';
import { Slide } from '@material-ui/core';
import { IoIosHelpCircle, IoIosStar, IoIosSettings } from 'react-icons/io';
import { IoLogOut, IoHome } from 'react-icons/io5';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Menu({ setIsMenuDisplay, sliderMenu, setSliderMenu }) {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Slide in={sliderMenu} direction="left" timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>  
        <MenuBlur></MenuBlur>
      </Slide>
      <Slide in={sliderMenu} direction="left" timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
        <MenuDiv>
          <PageType onClick={() => { navigate('/homepage'); setSliderMenu(false); setTimeout(() => { setIsMenuDisplay(false); }, 600); }}><p>homepage</p><IoHome/></PageType>
          <PageType onClick={() => { navigate('/settings'); setSliderMenu(false); setTimeout(() => { setIsMenuDisplay(false); }, 600); }}><p>configurações</p><IoIosSettings/></PageType>
          <PageType onClick={() => { navigate('/favorites'); setSliderMenu(false); setTimeout(() => { setIsMenuDisplay(false); }, 600); }}><p>favoritos</p><IoIosStar/></PageType>
          <PageType onClick={() => { navigate('/about-us'); setSliderMenu(false); setTimeout(() => { setIsMenuDisplay(false); }, 600); }}><p>sobre nós</p><IoIosHelpCircle/></PageType>
          <PageType onClick={() => { setUserData({}); navigate('/sign-in'); }}><p>log out</p><IoLogOut/></PageType>
        </MenuDiv>
      </Slide>
    </>
  );
}

const PageType = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  color: gray;
  font-size: 18px;
  p{
    color: lightgray;
    font-size: 15px;
  }
  :hover{
    cursor: pointer;
    color: white;
    border-bottom: 1px solid lightgray;
    p{
      color: white;
    }
  }
`;

const MenuDiv = styled.div`
  width: 600px;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: black;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 80px 80px;
`;

const MenuBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 0.8;
  z-index: 4;
  display: flex;
  justify-content: flex-end;
  /* animation: fadeIn 300ms;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 0.8; }
  } */
`;
