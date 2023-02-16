import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grow } from '@material-ui/core';
import { IoIosStar, IoMdSearch } from 'react-icons/io';
import notfound from '../../assets/images/notfound.png';
import useFavorite from '../../hooks/api/useFavorite';
import { toast } from 'react-toastify';
import useUnfavorite from '../../hooks/api/useUnfavorite';

export default function Place({ toggleGrow, name, timeout, image, description, place, setPlaceSelected, setIsPlaceDisplay, setSliderPlaceData, userId, setPlaceSelectedFav }) {
  const { favoriteLoading, favorite } = useFavorite();
  const { unfavoriteLoading, unfavorite } = useUnfavorite();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(0);

  useEffect(() => {
    if(place) {
      (place.Favorite).map((favorite) => {
        if(favorite.userId === userId) {
          setIsFavorite(true);
          setFavoriteId(favorite.id);
        }
      });
    };
  }, []);

  async function favoritePlace() {
    try {
      const fav = await favorite(place.id, userId);
      setIsFavorite(true);
      setFavoriteId(fav.id);
    } catch (error) {
      toast('Não foi possível favoritar, tente novamente!');
    }
  }

  async function unfavoritePlace() {
    try {
      await unfavorite(favoriteId);
      setIsFavorite(false);
    } catch (error) {
      toast('Não foi possível desfavoritar, tente novamente!');
    }
  }

  return (
    <Grow in={toggleGrow} timeout={{ enter: timeout, exit: 300 }} mountOnEnter unmountOnExit>
      <MarginDiv isFavorite={isFavorite}>
        <img src={image} alt='Foto do ponto turístico' 
          onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); if(isFavorite) {setPlaceSelectedFav(true);}else {setPlaceSelectedFav(false);} }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = notfound;
          }}
        />
        <PlaceData>
          <Title onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); if(isFavorite) {setPlaceSelectedFav(true);}else {setPlaceSelectedFav(false);} }} isFavorite={isFavorite}>{name}</Title>
          <Description>{description}</Description>
          <Icons>
            <IconL onClick={() => { setPlaceSelected(place); setIsPlaceDisplay(true); setSliderPlaceData(true); if(isFavorite) {setPlaceSelectedFav(true);}else {setPlaceSelectedFav(false);} }}><div><IoMdSearch/></div><p>saber mais</p></IconL>
            { isFavorite ? (
              <IconR onClick={() => { unfavoritePlace(); setPlaceSelectedFav(false); }} disabled={unfavoriteLoading}><div><IoIosStar/></div><p>desfavoritar</p></IconR>
            ):(
              <IconR onClick={() => { favoritePlace(); setPlaceSelectedFav(true); }} disabled={favoriteLoading}><div><IoIosStar/></div><p>favoritar</p></IconR>
            ) }
          </Icons>
        </PlaceData>
      </MarginDiv>
    </Grow>
  );
}

const Title = styled.div`
  width: fit-content;
  font-size: 20px;
  border-bottom: 1px solid gray;
  border-bottom: ${props => props.isFavorite ? '1px solid #EEBC1D':'1 px solid gray'};
  box-sizing: border-box;
  padding-bottom: 3px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: pointer;
    border-bottom: 1px solid white;
    border-bottom: ${props => props.isFavorite ? '1px solid #EEBC1D':'1 px solid gray'};
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  margin-top: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 5px;
  p{
    font-size: 12px;
    margin-left: 4px;
  }
`;

const IconL = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-right: .5px solid lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  div{
    margin-top: 2.5px;
  }
  :hover{
    cursor: pointer;
    background-color: gray;
    color: white;
    div {
      animation: wiggle 1s linear infinite;
    }
  }
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-25deg);
    }
    20% {
      transform: rotateZ(20deg);
    }
    25% {
      transform: rotateZ(-20deg);
    }
    30% {
      transform: rotateZ(12deg);
    }
    35% {
      transform: rotateZ(-8deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const IconR = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: .5px solid lightgray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  div{
    margin-top: 1.5px;
  }
  :hover{
    cursor: pointer;
    background-color: #EEBC1D;
    color: white;
    div {
      animation: wiggle 1s linear infinite;
    }
  }
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const Description = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: default;
  }
`;

const PlaceData = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MarginDiv = styled.div`
  border: 1px solid gray;
  border: ${props => props.isFavorite ? '1px solid #EEBC1D':'1 px solid gray'};
  height: 102px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  img{
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
    :hover{
      cursor: pointer;
    }
  }
`;
