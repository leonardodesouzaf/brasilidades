import { Logo, Slogan, Slogan1, Slogan2, Slogan3, TopBar, MenuIcon, Places } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useContext, useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import { Grow } from '@material-ui/core';
import { FavoritesContent, FavoritesPlaces, FavoritesTitle, NoneFavoritesPlaces, ScrollAdFav } from '../../components/Favorites';
import PlaceData from '../../components/Homepage/PlaceData';
import Place from '../../components/Homepage/Place';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import useFavoritePlaces from '../../hooks/api/useFavoritePlaces';
import { toast } from 'react-toastify';
export default function Favorites() {
  const [placeSelected, setPlaceSelected] = useState({});
  const [placeSelectedFav, setPlaceSelectedFav] = useState(false);
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [isPlaceDisplay, setIsPlaceDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [sliderPlaceData, setSliderPlaceData] = useState(false);
  const [toggleGrow, setToggleGrow] = useState(true);
  const { userData } = useContext(UserContext);
  const [placesArr, setPlacesArr] = useState([]);
  const navigate = useNavigate();
  const { favoritePlaces } = useFavoritePlaces();

  useEffect(() => {
    getFavoritePlaces();
  }, [placeSelectedFav]);

  async function getFavoritePlaces() {
    try {
      const places = await favoritePlaces(userData.user.id);
      setPlacesArr(places);
    } catch (error) {
      toast('Não foi possível carregar a sua lista de favoritos, atualize a página!');
    }
  }

  return (
    <HomepageLayout>
      { isMenuDisplay ? (
        <Menu setIsMenuDisplay={setIsMenuDisplay} sliderMenu={sliderMenu} setSliderMenu={setSliderMenu}/>
      ):(
        <></>
      )}
      { isPlaceDisplay ? (
        <PlaceData setIsPlaceDisplay={setIsPlaceDisplay} placeSelected={placeSelected} sliderPlaceData={sliderPlaceData} setSliderPlaceData={setSliderPlaceData} userId={userData.user.id} placeSelectedFav={placeSelectedFav}/>
      ):(
        <></>
      )}
      <TopBar>
        <Logo onClick={() => navigate('/homepage')}><p>brasilidades</p></Logo>
        <Slogan><Slogan1>pesquise,</Slogan1><Slogan2>favorite</Slogan2><Slogan3>e visite</Slogan3></Slogan>
        <MenuIcon onClick={() => {setIsMenuDisplay(true); setSliderMenu(true);}}><IoMdMenu/></MenuIcon>
      </TopBar>
      <Grow in={true} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <FavoritesContent>
          <FavoritesTitle>favoritos</FavoritesTitle>
          <FavoritesPlaces>
            { (placesArr.length > 0) ? (
              <>
                <Places>
                  {placesArr.map((place, index) => <Place key={index} toggleGrow={toggleGrow} timeout={200*(index+1)} name={place.name} image={place.image} description={place.description} setPlaceSelected={setPlaceSelected} place={place} setIsPlaceDisplay={setIsPlaceDisplay} setSliderPlaceData={setSliderPlaceData} userId={userData.user.id} setPlaceSelectedFav={setPlaceSelectedFav} />)}
                </Places>
                <ScrollAdFav><p>deslize para ver mais {'>'}{'>'}{'>'}</p></ScrollAdFav>
              </>
            ):(
              <>
                <NoneFavoritesPlaces>
                  <div onClick={() => navigate('/homepage')}> 
                    <p>parece que você não tem favoritos ainda,</p>
                    <p>clique aqui para pesquisar lugares para favoritar!</p>
                  </div>
                </NoneFavoritesPlaces>
              </>
            )}
          </FavoritesPlaces>
        </FavoritesContent>
      </Grow>
    </HomepageLayout>
  );
}
