import React from 'react';
import styled from 'styled-components';
import { Fade, Tooltip, Zoom } from '@material-ui/core';
import { IoIosClose, IoIosPin, IoIosTime, IoIosArrowForward, IoIosArrowBack, IoIosStar, IoIosHelpCircle } from 'react-icons/io';
import { IoFastFood, IoCellular, IoAirplane, IoCar, IoBoat } from 'react-icons/io5';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsBadgeWcFill } from 'react-icons/bs';
import { GiMountainClimbing } from 'react-icons/gi';
import { RiFileUserFill } from 'react-icons/ri';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import GoogleMap from './GoogleMap';
import notfound from '../../assets/images/notfound.png';
import { format, parseISO } from 'date-fns';

export default function PlaceData({ setIsPlaceDisplay, sliderPlaceData, setSliderPlaceData, placeSelected, placeSelectedFav }) {
  return (
    <>
      <Fade in={sliderPlaceData} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <MenuBlur></MenuBlur>
      </Fade>
      <Zoom in={sliderPlaceData} timeout={{ enter: 500, exit: 500 }} style={{ transitionDelay: sliderPlaceData ? '200ms' : '0ms' }} unmountOnExit mountOnEnter>
        <PlaceDiv>
          <TopBar>
            <img src={placeSelected.image} alt='Foto do ponto turístico'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = notfound;
              }}
            />
            <AboutIcons>
              <IconsColumn>
                <Tooltip TransitionComponent={Zoom} title="entrada paga" arrow  placement="left">
                  <div><AiFillDollarCircle color={placeSelected.isPaid ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="sinal de celular" arrow  placement="left">
                  <div><IoCellular color={placeSelected.hasCellular ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="ajuda para turistas" arrow  placement="left">
                  <div><IoIosHelpCircle color={placeSelected.hasGuidance ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="acesso rodoviário" arrow  placement="left">
                  <div><IoCar color={placeSelected.car ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="difícil acesso ou trilha" arrow  placement="left">
                  <div><GiMountainClimbing color={placeSelected.isTrekking ? 'black' : 'lightgray'}/></div>
                </Tooltip>
              </IconsColumn>
              <IconsColumn>
                <Tooltip TransitionComponent={Zoom} title="locais de alimentação" arrow  placement="right">
                  <div><IoFastFood color={placeSelected.hasFood ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="banheiro" arrow  placement="right">
                  <div><BsBadgeWcFill color={placeSelected.hasWc ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="documento obrigatório" arrow  placement="right">
                  <div><RiFileUserFill color={placeSelected.needId ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="acesso aéreo" arrow  placement="right">
                  <div><IoAirplane color={placeSelected.airplane ? 'black' : 'lightgray'}/></div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="acesso marítimo" arrow  placement="right">
                  <div><IoBoat color={placeSelected.boat ? 'black' : 'lightgray'}/></div>
                </Tooltip>
              </IconsColumn>
            </AboutIcons>
            <TopInfo>
              <Name>{placeSelected.name}</Name>
              <Localization><IoIosPin/><p>{placeSelected.city}</p></Localization>
              <LastUpdate><IoIosTime/><p> atualizado em: {format(parseISO(placeSelected.updatedAt), 'dd/MM/yyyy ')}</p></LastUpdate>
            </TopInfo>
            <FeatureIcons>
              <CloseIcon onClick={() => {
                setSliderPlaceData(false);
                setTimeout(() => {
                  setIsPlaceDisplay(false);
                }, 600);
              }}><IoIosClose/></CloseIcon>
              { placeSelectedFav ? (
                <Tooltip TransitionComponent={Zoom} title="favoritado" arrow  placement="left">
                  <StarIcon placeSelectedFav={placeSelectedFav}><IoIosStar/></StarIcon>
                </Tooltip>
              ):(
                <Tooltip TransitionComponent={Zoom} title="não favoritado" arrow  placement="left">
                  <StarIcon placeSelectedFav={placeSelectedFav}><IoIosStar/></StarIcon>
                </Tooltip>
              ) }
            </FeatureIcons>
          </TopBar>
          <TopBarSpace></TopBarSpace>
          <Description>
            <Subtitles>sobre</Subtitles>
            <p>{placeSelected.description}</p>
          </Description>
          <Images>
            <Subtitles>fotos</Subtitles>
            <PreviousIcon><IoIosArrowBack/></PreviousIcon>
            <NextIcon><IoIosArrowForward/></NextIcon>
            <Slider settings = {{
              slidesToShow: 3,
              slidesToScroll: 1,
              autoPlay: true,
              autoPlaySpeed: 2000,
              pauseOnHover: true
            }}>
              <div>
                <ImagesFlex>
                  <img src={placeSelected.image2} alt='Foto do ponto turístico' 
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = notfound;
                    }}
                  />
                </ImagesFlex>
              </div>
              <div>
                <ImagesFlex>
                  <img src={placeSelected.image3} alt='Foto do ponto turístico'
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = notfound;
                    }}
                  />
                </ImagesFlex>
              </div>
              <div>
                <ImagesFlex>
                  <img src={placeSelected.image4} alt='Foto do ponto turístico'
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = notfound;
                    }}
                  />
                </ImagesFlex>
              </div>
            </Slider>
          </Images>
          <MapDiv>
            <Subtitles>localização</Subtitles>
            <GoogleMapDiv>
              <GoogleMap src={placeSelected.googleMapUrl}/>
            </GoogleMapDiv>
          </MapDiv>
        </PlaceDiv>
      </Zoom>
    </>
  );
}

const FeatureIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StarIcon = styled.div`
  font-size: 20px;
  margin-left: 5px;
  color: gray;
  color: ${props => props.placeSelectedFav ? 'gold':'gray'};
`;

const GoogleMapDiv = styled.div`
  margin-top: 15px;
  width: 100%;
  border-radius: 5px;
`;

const MapDiv = styled.div`
  width: 840px;
`;

const NextIcon = styled.div`
  position: absolute;
  left: 845px;
  top: 187px;
  z-index: 2;
  font-size: 25px;
  color: black;
  pointer-events: none;
`;

const PreviousIcon = styled.div`
  position: absolute;
  left: -30px;
  top: 187px;
  z-index: 2;
  font-size: 25px;
  pointer-events: none;
`;

const Subtitles = styled.div`
  font-size: 25px;
  width: fit-content;
  color: black;
  border-bottom: 2px solid darkgray;
  box-sizing: border-box;
  padding-bottom: 2px;
  margin-bottom: 20px;
`;

const ImagesFlex = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Images = styled.div`
  margin-top: 15px;
  font-size: 17px;
  color: black;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

const Description = styled.div`
  margin-top: 15px;
  font-size: 17px;
  color: black;
  p{
    text-indent: 40px;
  }
`;

const IconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  font-size: 15px;
  :hover{
    cursor: help;
  }
`;

const AboutIcons = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 90px;
  box-sizing: border-box;
  padding: 2px 3px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
`;

const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 3px;
  p{
    margin-left: 3px;
    color: grey;
    font-size: 12px;
  }
  :hover{
    cursor: default;
  }
`;

const Name = styled.div`
  width: 650px;
  font-size: 40px;
  line-height: 50px;
  margin-top: -9px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: default;
  }
`;

const Localization = styled.div`
  margin-top: 18px;
  color: #CF0E0E;
  display: flex;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  padding-left: 1.5px;
  p{
    margin-left: 2px;
    color: grey;
    font-size: 12px;
  }
  :hover{
    cursor: default;
    color: red;
  }
`;

const TopInfo = styled.div`
  color: black;
  width: 100%;
`;

const TopBarSpace = styled.div`
  height: 120px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  box-sizing: border-box;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
  position: fixed;
  background-color: white;
  border-top: 30px solid white;
  margin-top: -30px;
  margin-left: -30px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  img{
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const PlaceDiv = styled.div`
  width: 900px;
  height: 77vh;
  background-color: white;
  position: fixed;
  top: 100px;
  border-radius: 5px;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  z-index: 5;
  box-sizing: border-box;
  padding: 30px;
  overflow: scroll;
`;

const CloseIcon = styled.div`
  font-size: 30px;
  color: gray;
  :hover{
    cursor: pointer;
    color: #CF0E0E;
  }
`;

const MenuBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 0.8;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
