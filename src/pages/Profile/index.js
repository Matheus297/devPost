import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import { View,Text, Button } from 'react-native';

// import { Container } from './styles';

const Profile = () => {
  const {signOut} = useContext(AuthContext)
  return (
      <View>
          <Text>Tela de Profile</Text>
          <Button  title='Sair' onPress={() => signOut()}/>
      </View>
  )
}

export default Profile;