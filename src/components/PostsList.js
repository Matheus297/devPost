import React from 'react';
import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

const Container = styled.View`
margin-top: 8px;
margin: 8px 2%;
background-color: #fff;
padding: 11px;
border-radius: 8px;
box-shadow: 1px 1px 1px rgba(18,18,18, 0.2);
elevation: 3;

`;

const Header = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin-bottom: 5px;

`;

const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
margin-right: 10px;

`;

const Name = styled.Text`
color: #000;
font-size: 18px;
font-weight: bold;
`;

const Content = styled.View`


`;

const PostText = styled.Text`

`;

const Actions = styled.View`
flex-direction: row;
align-items: baseline;
justify-content: space-between;

`;


const Like = styled.TouchableOpacity`
width: 45px;
margin-top: 12px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const CountLikes = styled.Text`
color: #49C6F2;
margin-right: 6px;

`;

const TimePost = styled.Text`


`;



const PostsList = ({data, userId}) => {
  return (
      <Container>
          <Header>
              <Avatar source={require('../assets/profile.jpg')}/>
              <Name>Matheus</Name>
          </Header>
          <Content>
              <PostText>Este é meu post</PostText>
          </Content>
          <Actions>
              <Like>
                  <CountLikes>100</CountLikes>
                  <AntDesign name="like2" size={20} color="#49C6F2" />
              </Like>
          <TimePost>há 10 minutos</TimePost>
          </Actions>
      </Container>
  )
}

export default PostsList;