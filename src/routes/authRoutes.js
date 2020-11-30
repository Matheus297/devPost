import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login/index';



const Stacks = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stacks.Navigator>
            <Stacks.Screen name='Login' component={Login} options={{headerShown: false}}/>
        </Stacks.Navigator>
    )
}


export default AuthRoutes;