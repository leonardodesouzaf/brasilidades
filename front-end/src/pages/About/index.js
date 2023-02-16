import { Logo, Slogan, Slogan1, Slogan2, Slogan3, TopBar, MenuIcon } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Menu from '../../components/Homepage/Menu';
import { Grow } from '@material-ui/core';
import { AboutContent, AboutEmail, AboutText, AboutTitle } from '../../components/About';
import { useNavigate } from 'react-router-dom';
export default function About() {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [appEmail, setAppEmail] = useState('leonardosouzaf@icloud.com');
  const navigate = useNavigate();
  return (
    <HomepageLayout>
      { isMenuDisplay ? (
        <Menu setIsMenuDisplay={setIsMenuDisplay} sliderMenu={sliderMenu} setSliderMenu={setSliderMenu}/>
      ):(
        <></>
      )}
      <TopBar>
        <Logo onClick={() => navigate('/homepage')}><p>brasilidades</p></Logo>
        <Slogan><Slogan1>pesquise,</Slogan1><Slogan2>favorite</Slogan2><Slogan3>e visite</Slogan3></Slogan>
        <MenuIcon onClick={() => {setIsMenuDisplay(true); setSliderMenu(true);}}><IoMdMenu/></MenuIcon>
      </TopBar>
      <Grow in={true} timeout={{ enter: 700, exit: 700 }} unmountOnExit mountOnEnter>  
        <AboutContent>
          <AboutTitle>sobre nós</AboutTitle>
          <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</AboutText>
          <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent est nisi, egestas id imperdiet in, rhoncus ac sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</AboutText>
          <AboutTitle>contato</AboutTitle>
          <AboutText>Abaixo segue o e-mail de contato da <strong>brasilidades</strong>, seja para sugerir pontos turísticos novos ou que não estejam presentes em nosso catálogo como também para apontar correções nas informações disponibilizadas. Qual seja o assunto, sinta-se confortável para nos contatar! </AboutText>
          <AboutEmail onClick={() => { window.open(`mailto:${appEmail}?Subject=Sugest%E3o%20de%20lugar%20para%20o%20brasilidades&Body=O%20lugar%20que%20eu%20gostaria%20de%20sugerir%20%E9%3A%20...`); }}>• e-mail: {appEmail}</AboutEmail>
        </AboutContent>
      </Grow>
    </HomepageLayout>
  );
}
