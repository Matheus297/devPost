import 'react-native-gesture-handler';
import React from 'react';
import AuthProvider from './src/context/auth';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes/index';


const App = () => {
  return (
    <NavigationContainer>
     <AuthProvider>
        <StatusBar backgroundColor='#36393f' barStyle='light-content' translucent={false} />
        <Routes />
     </AuthProvider>
    </NavigationContainer>
  )
}


export default App;
