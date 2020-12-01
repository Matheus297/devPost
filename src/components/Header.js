import React from 'react';
import styled from 'styled-components';
import { View,Text } from 'react-native';


const Container = styled.SafeAreaView`
width: 100%;
justify-content: center;
align-items: center;
background-color: #fff;
`;

const Title = styled.Text`
font-size: 27px;
font-weight: bold;
padding-bottom: 15px;
`;

const Header = () => {
  return (
      <Container>
          <Title>
            Dev
            <Text style={{fontStyle: 'italic', color: "#49C6F2"}}>witter</Text>
          </Title>
      </Container>
  )
}

export default Header;