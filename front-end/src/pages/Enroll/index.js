import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Logo, Slogan, Divider, Line, Subtitle, OAuthWrapper } from '../../components/Auth';
import Link from '../../components/Link';
import brasilMap from '../../assets/images/brasilmap.png';

import useSignUp from '../../hooks/api/useSignUp';
import OAuth from '../../components/Auth/OAuth';
import { facebookAuth, githubAuth, googleAuth } from '../../utils/authUtils';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Você foi inscrito com sucesso! Por favor, faça login!');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout>
      <Logo><p>brasilidades</p> <img src={brasilMap} alt='Mapa do Brasil'/></Logo>
      <Slogan>pesquise, favorite e visite</Slogan>
      <Row>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Cadastrar</Button>
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
        <Link to="/sign-in"><p>Já se cadastrou? Faça login</p></Link>
      </Row>
    </AuthLayout>
  );
}
