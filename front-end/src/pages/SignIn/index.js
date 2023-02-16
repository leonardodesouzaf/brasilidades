import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import OAuth from '../../components/Auth/OAuth';
import { Row, Logo, Slogan, Subtitle, Divider, Line, OAuthWrapper } from '../../components/Auth';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import { googleAuth, githubAuth, facebookAuth } from '../../utils/authUtils';
import brasilMap from '../../assets/images/brasilmap.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [slogan, setSlogan] = useState(0);

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/homepage');
    } catch (err) {
      toast('Não foi possível fazer o login, por favor, tente novamente!');
    }
  }

  useEffect(() => {
    sloganFading();
    setInterval(() => {
      sloganFading();
    }, 16000);
  }, []);

  function sloganFading() {
    setSlogan(0);
    setTimeout(() => {
      setSlogan(1);
    }, 4000);
    setTimeout(() => {
      setSlogan(2);
    }, 8000);
    setTimeout(() => {
      setSlogan(3);
    }, 12000);
  }

  return (
    <AuthLayout>
      <Logo><p>brasilidades</p> <img src={brasilMap} alt='Bandeira do Brasil'/></Logo>
      { (slogan === 0) ? (
        <Slogan>pesquise, favorite e visite</Slogan>
      ):(
        <>
          { (slogan === 1) ? (
            <Slogan>pesquise pontos turísticos</Slogan>
          ):(
            <>
              { (slogan === 2) ? (
                <Slogan>favorite os seus preferidos</Slogan>
              ):(
                <Slogan>e visite as maravilhas do Brasil</Slogan>
              )}
            </>
          )}
        </>
      )}
      <Row>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" background='black' fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="inherit" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>

      <Row>
        <Divider>
          <Line></Line>
          <Subtitle>ou</Subtitle>
          <Line></Line>
        </Divider>
      </Row>

      <OAuthWrapper>
        <OAuth logo={googleAuth.logo} name={googleAuth.name} />
        <OAuth logo={githubAuth.logo} name={githubAuth.name}/>
        <OAuth logo={facebookAuth.logo} name={facebookAuth.name}/>
      </OAuthWrapper>

      <Row>
        <Link to="/enroll"><p>Não possui login? Cadastre-se</p></Link>
      </Row>
    </AuthLayout>
  );
}
