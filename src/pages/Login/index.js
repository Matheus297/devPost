import React, { useState, useContext } from 'react';
import {AuthContext} from '../../context/auth';
import { View,Text, ActivityIndicator } from 'react-native';

import { Container, Title, Input, Button, ButtonText, SignButton, SignText } from './styles';

const Login = () => {
  const [login, setLogin] = useState(true);  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { signIn, signUp, loadingAuth} = useContext(AuthContext)
  


  const handleLogin = () => {
    setLogin(!login)
  }


  const handleSubmit = () => {
    if(email === '' || senha === ''){
      alert('Preencha os dados')
    }
    signIn(email, senha)
  
  }

  const handleSignUp = () => {
    if(email === '' || senha === '' || nome === ''){
      alert('Preencha os dados')
    }
    signUp(email,senha,nome)
  }


  if(login){
    return (
      <Container>
     <Title>
       Dev
       <Text style={{color: 'red'}}>Post</Text>
     </Title>


     <Input
     placeholder='email@email.com'
     onChangeText={t => setEmail(t)}
     value={email}
     />
     <Input
     placeholder='Senha'
     secureTextEntry={true}
     onChangeText={t => setSenha(t)}
     value={senha}
     />

     <Button onPress={handleSubmit}>
       {
         loadingAuth ? (
           <ActivityIndicator size={20} color='#fff' />
         ) : (
          <ButtonText>Acessar</ButtonText>
         )
       }
       
     </Button>
     <SignButton onPress={handleLogin}>
       <SignText>Criar uma conta</SignText>
     </SignButton>
    </Container>
    )
  }


  return (
    <Container>
    <Title>
      Dev
      <Text style={{color: 'red'}}>Post</Text>
    </Title>


    <Input
    placeholder='Nome'
    onChangeText={t => setNome(t)}
    />
     <Input
    placeholder='E-mail'
    onChangeText={t => setEmail(t)}
    />
    <Input
    placeholder='Senha'
    secureTextEntry={true}
    onChangeText={t => setSenha(t)}
    />

    <Button onPress={handleSignUp}>
    {
         loadingAuth ? (
           <ActivityIndicator size={20} color='#fff' />
         ) : (
          <ButtonText>Cadastrar</ButtonText>
         )
       }
      
    </Button>
    <SignButton onPress={handleLogin}>
       <SignText>Já possuo uma conta</SignText>
     </SignButton>
   </Container>
  )
}

export default Login;