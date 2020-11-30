import React from 'react';
import styled from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import { View,Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'


const Container = styled.View`
flex: 1;
background-color: #36393f;


`;

const ButtonPost = styled.TouchableOpacity`
background-color: #202225;
width: 60px;
height: 60px;
border-radius: 30px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 6%;


`

const Home = () => {
  const navigation = useNavigation();
  return (
      <Container>
          <ButtonPost onPress={() => navigation.navigate('New Post')}>
            <Feather name='edit-2' color='#fff' size={25}/>
          </ButtonPost>
      </Container>
  )
}

export default Home;