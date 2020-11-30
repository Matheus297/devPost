import React, {useState, useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../context/auth';
import styled from 'styled-components';
import { View,Text, TouchableOpacity } from 'react-native';
import { set } from 'react-native-reanimated';


const Container = styled.View`
flex: 1;
background-color: #404349;

`;

const Input = styled.TextInput`
background-color: transparent;
margin: 10px;
font-size: 20px;
color: #fff;
`;

const ButtonRight = styled.TouchableOpacity`
padding: 5px 12px;
margin-right: 7px;
border-radius: 4px;
border: 1px solid #fff;
align-items: center;
justify-content: center;

`;

const ButtonRightText = styled.Text`
color: #fff;
font-size: 16px;

`;


const NewPost = () => {
  const [post, setPost] = useState('');
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <ButtonRight onPress={() => handlePost()}>
          <ButtonRightText>Compartilhar</ButtonRightText>
        </ButtonRight>
      )
    })
  }, [navigation, post]);


  async function handlePost(){
    if(post === ''){
      console.log('Post invalido')
    }

    let avatarUrl = null;
    try {
      let response = await storage().ref('users').child(user?.uid).getDownloadURL();
      avatarUrl = response;
    

    } catch (error) {
      avatarUrl = null;
    }

    await firestore().collection('posts')
    .add({
      created: new Date(),
      postCurrent: post,
      author: user.nome,
      likes: 0,
      avatarUrl,
      userId: user.uid
    
    })
    .then(() => {
      setPost('');
      console.log('Post criado')
    })
    .catch((error) => {
      console.log(error)
    })

    navigation.goBack();
  }

  return (
      <Container>
        <Input
          placeholder="Oque está pensando"
          placeholderTextColor="#ddd" 
          multiline={true}
          maxLength={300}
          value={post}
          onChangeText={t => setPost(t)}
          autoCorrect={false}
          />
      </Container>
  )
}

export default NewPost;