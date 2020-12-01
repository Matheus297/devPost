import React, { useState, useEffect, useContext  } from 'react';
import styled from 'styled-components'
import {AuthContext} from '../../context/auth';
import firestore from '@react-native-firebase/firestore';
import {View, Text, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'



import Header from '../../components/Header';
import PostsList from '../../components/PostsList';


const Container = styled.View`
flex: 1;
background-color: #fff;


`;

const ButtonPost = styled.TouchableOpacity`
background-color: #4693E8;
width: 60px;
height: 60px;
border-radius: 30px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 6%;
right: 6%;


`;

const Posts = styled.FlatList`
flex: 1;
background-color: #f1f1f1;
`;

const Home = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const subscriber = firestore().collection('posts')
    .orderBy('created', 'desc')
    .onSnapshot(snap => {
      const postList = [];

      snap.forEach(doc => {
        postList.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setPost(postList);
      setLoading(false);
    })


    return () => subscriber();
  }, [])



  return (
      <>
      <Header />
      {loading ? (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#49C6F2" />
        </View>
      ): (
        <Container>
        <Posts
          showVerticalScrollIndicator={false}
          data={posts}
          renderItem={({item}) => <PostsList data={item} userId={user.uid} />}
        
        />
          <ButtonPost onPress={() => navigation.navigate('NewPost')}>
            <Feather name='edit-2' color='#fff' size={25}/>
          </ButtonPost>
      </Container>
      )}
      
      </>
  )
}

export default Home;