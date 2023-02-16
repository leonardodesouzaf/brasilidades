import { Logo, Map, Slogan, Slogan1, Slogan2, Slogan3, Places, PlaceSuggestion, DistrictName, Line, ToClickDiv, ToClickDivText, TopBar, DistrictColumn, MenuIcon, ScrollAd } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { MapBrazil } from 'react-brazil-map';
import { useContext, useEffect, useState } from 'react';
import Place from '../../components/Homepage/Place';
import { districtsImages, districtsNames } from '../../components/Homepage/districtsData';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import PlaceData from '../../components/Homepage/PlaceData';
import { Grow } from '@material-ui/core';
import UserContext from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import useDistrictPlaces from '../../hooks/api/useDistrictPlaces';

export default function Homepage() {
  const [placeSelected, setPlaceSelected] = useState({});
  const [placeSelectedFav, setPlaceSelectedFav] = useState(false);
  const [district, setDistrict] = useState('');
  const [isSelectDisplay, setIsSelectDisplay] = useState(true);
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [isPlaceDisplay, setIsPlaceDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [sliderPlaceData, setSliderPlaceData] = useState(false);
  const [toggleGrow, setToggleGrow] = useState(false);
  const [districtName, setDistrictName] = useState('');
  const [districtImage, setDistrictImage] = useState(districtsImages.BR);
  const [appEmail, setAppEmail] = useState('leonardosouzaf@icloud.com');
  const { userData } = useContext(UserContext);
  const { districtPlacesLoading, districtPlaces } = useDistrictPlaces();
  const [placesArr, setPlacesArr] = useState([]);

  useEffect(() => {
    if(district !== '') {
      setIsSelectDisplay(false);
    }
    for(let i=0; i<28; i++) {
      if(Object.keys(districtsImages)[i] === district) {
        setToggleGrow(false);
        setDistrictImage(districtsImages[district]);
        setDistrictName(districtsNames[district]);
        getDistrictPlaces();
        setTimeout(() => {
          setToggleGrow(true);
        }, 500);
      }
    }
  }, [district]);

  async function getDistrictPlaces() {
    try {
      const places = await districtPlaces(district);
      setPlacesArr(places);
    } catch (error) {
      toast('Não foi possível carregar os pontos turísticos, atualize a página!');
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
        <Logo><p>brasilidades</p></Logo>
        <Slogan><Slogan1>pesquise,</Slogan1><Slogan2>favorite</Slogan2><Slogan3>e visite</Slogan3></Slogan>
        { isSelectDisplay ? (
          <></>
        ):(
          <MenuIcon onClick={() => {setIsMenuDisplay(true); setSliderMenu(true);}}><IoMdMenu/></MenuIcon>
        )}
      </TopBar>
      <Grow in={true} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <Map isSelectDisplay={isSelectDisplay}>
          <MapBrazil onChange={setDistrict} bg='white' fill='black' colorStroke='lightgray' colorLabel='white' width={500} height={500} disabled={districtPlacesLoading} />
          { isSelectDisplay ? (
            <></>
          ) : (
            <>
              <DistrictColumn>
                <DistrictName><img src={districtImage} alt='Bandeira do Estado'/>{districtName}</DistrictName>
                <Line></Line>
                <Places>
                  {placesArr.map((place, index) => <Place key={index} toggleGrow={toggleGrow} timeout={200*(index+1)} name={place.name} image={place.image} description={place.description} setPlaceSelected={setPlaceSelected} place={place} setIsPlaceDisplay={setIsPlaceDisplay} setSliderPlaceData={setSliderPlaceData} userId={userData.user.id} setPlaceSelectedFav={setPlaceSelectedFav}/>)}
                  <Grow in={toggleGrow} timeout={{ enter: 200, exit: 300 }} mountOnEnter unmountOnExit>
                    <PlaceSuggestion onClick={() => { window.open(`mailto:${appEmail}?Subject=Sugest%E3o%20de%20lugar%20para%20o%20brasilidades&Body=O%20lugar%20que%20eu%20gostaria%20de%20sugerir%20%E9%3A%20...`); }}><IoIosAdd/><p>possui uma sugestão? envie um e-mail para nós!</p></PlaceSuggestion>
                  </Grow>
                </Places>
                <ScrollAd><p>deslize para ver mais {'>'}{'>'}{'>'}</p></ScrollAd>
              </DistrictColumn>
            </>
          )}
        </Map>
      </Grow>
      { !isSelectDisplay ? (
        <></>
      ) : (
        <ToClickDiv><ToClickDivText><p>clique no mapa para começar</p></ToClickDivText></ToClickDiv>
      )}
    </HomepageLayout>
  );
}
