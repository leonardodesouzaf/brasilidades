import { Logo, Slogan, Slogan1, Slogan2, Slogan3, TopBar, MenuIcon } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useContext, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { toast } from 'react-toastify';
import Menu from '../../components/Homepage/Menu';
import { Fade, Grow } from '@material-ui/core';
import { CancelButton, ChangeButton, ConfirmButton, ConfirmDeleteButton, ConfirmDeleteButtonCancel, ConfirmDeleteFlexing, DeleteButton, Flexing, SettingsContent, SettingsInput, SettingsPasswordSubtitle, SettingsSubtitle, SettingsTitle } from '../../components/Settings';
import { WhiteBorderTextField } from '../../components/Settings/Input';
import { useNavigate } from 'react-router-dom';
import useEmailUpdate from '../../hooks/api/useEmailUpdate';
import UserContext from '../../contexts/UserContext';
import usePasswordUpdate from '../../hooks/api/usePasswordUpdate';
import useUnfavoriteAll from '../../hooks/api/useUnfavoriteAll';
import useDeleteAccount from '../../hooks/api/useDeleteAccount';

export default function Settings() {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);
  const [isEmailDisplay, setIsEmailDisplay] = useState(false);
  const [isPasswordDisplay, setIsPasswordDisplay] = useState(false);
  const [isDeleteFavListDisplay, setIsDeleteFavListDisplay] = useState(false);
  const [isDeleteAccountDisplay, setIsDeleteAccountDisplay] = useState(false);
  const [sliderMenu, setSliderMenu] = useState(false);
  const [email, setEmail] = useState('');
  /* const [password, setPassword] = useState(''); */
  const [newPassword, setNewPassword] = useState('');
  const { loadingEmailUpdate, emailUpdate } = useEmailUpdate();
  const { loadingPasswordUpdate, passwordUpdate } = usePasswordUpdate();
  const { unfavoriteAllLoading, unfavoriteAll } = useUnfavoriteAll();
  const { deleteAccountLoading, deleteAccount } = useDeleteAccount();
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(UserContext);

  async function submitEmail() {
    try {
      const newUserData = await emailUpdate(email, userData.user.id);
      setIsEmailDisplay(false);
      setUserData(newUserData);
      setEmail('');
    } catch (error) {
      toast('Não foi possível alterar seu e-mail!');
    }
  }

  async function submitPassword() {
    try {
      await passwordUpdate(newPassword, userData.user.id);
      setIsPasswordDisplay(false);
      setNewPassword('');
    } catch (error) {
      toast('Não foi possível alterar sua senha!');
    }
  }

  async function unfavoriteAllPlaces() {
    try {
      await unfavoriteAll(userData.user.id);
      setIsDeleteFavListDisplay(false);
    } catch (error) {
      toast('Não foi possível desfavoritar tudo, tente novamente!');
    }
  }

  async function deleteUserAccount() {
    try {
      await unfavoriteAll(userData.user.id);
      await deleteAccount(userData.user.id);
      setUserData({});
      navigate('/sign-in');
    } catch (error) {
      toast('Não foi possível deletar sua conta, tente novamente!');
    }
  }

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
        <SettingsContent>
          <div>
            <SettingsTitle>configurações da conta</SettingsTitle>
            <Flexing>
              <SettingsSubtitle>trocar e-mail</SettingsSubtitle>
              { isEmailDisplay ? (
                <>
                  <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <CancelButton onClick={() => setIsEmailDisplay(false)} disabled={loadingEmailUpdate}>cancelar</CancelButton>
                  </Fade>
                  <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <SettingsInput>
                      <WhiteBorderTextField id="outlined-basic" variant="outlined" label="e-mail novo" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused disabled={loadingEmailUpdate}/>
                    </SettingsInput>
                  </Fade>
                  <Fade in={isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <ConfirmButton onClick={submitEmail} disabled={loadingEmailUpdate}>confirmar</ConfirmButton>
                  </Fade>
                </>
              ):(
                <Fade in={!isEmailDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <ChangeButton onClick={() => setIsEmailDisplay(true)}>trocar</ChangeButton>
                </Fade>
              ) }
            </Flexing>
            <Flexing>
              <SettingsPasswordSubtitle>trocar senha</SettingsPasswordSubtitle>
              { isPasswordDisplay ? (
                <>
                  <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <CancelButton onClick={() => setIsPasswordDisplay(false)}>cancelar</CancelButton>
                  </Fade>
                  {/* <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <SettingsInput>
                      <WhiteBorderTextField id="outlined-basic" variant="outlined" label="senha antiga" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
                    </SettingsInput>
                  </Fade> */}
                  <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <SettingsInput>
                      <WhiteBorderTextField id="outlined-basic" variant="outlined" label="senha nova" type="password" fullWidth value={newPassword} onChange={e => setNewPassword(e.target.value)} size="small" InputProps={{ style: { height: '35px', color: 'white', fontFamily: 'Lexend Deca' } }} InputLabelProps={{ style: { color: 'white', fontFamily: 'Lexend Deca' } }} focused/>
                    </SettingsInput>
                  </Fade>
                  <Fade in={isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                    <ConfirmButton onClick={submitPassword}>confirmar</ConfirmButton>
                  </Fade>
                </>
              ):(
                <Fade in={!isPasswordDisplay} timeout={{ enter: 500, exit: 500 }} unmountOnExit mountOnEnter>
                  <ChangeButton onClick={() => setIsPasswordDisplay(true)}>trocar</ChangeButton>
                </Fade>
              ) }
            </Flexing>
          </div>
          <div>
            { isDeleteFavListDisplay ? (
              <ConfirmDeleteFlexing><ConfirmDeleteButton onClick={unfavoriteAllPlaces}>limpar toda minha lista de favoritos</ConfirmDeleteButton><ConfirmDeleteButtonCancel onClick={() => setIsDeleteFavListDisplay(false)}>cancelar</ConfirmDeleteButtonCancel></ConfirmDeleteFlexing>
            ):(
              <DeleteButton onClick={() => setIsDeleteFavListDisplay(true)}>limpar toda minha lista de favoritos permanentemente</DeleteButton>
            ) }
            { isDeleteAccountDisplay ? (
              <ConfirmDeleteFlexing><ConfirmDeleteButton onClick={deleteUserAccount}>apagar a minha conta e todas as informações</ConfirmDeleteButton><ConfirmDeleteButtonCancel onClick={() => setIsDeleteAccountDisplay(false)}>cancelar</ConfirmDeleteButtonCancel></ConfirmDeleteFlexing>
            ):(
              <DeleteButton onClick={() => setIsDeleteAccountDisplay(true)}>apagar minha conta e todas as informações permanentemente</DeleteButton>
            ) }
          </div>
        </SettingsContent>
      </Grow>
    </HomepageLayout>
  );
}
