import React, {useContext} from 'react';
import {AuthContext} from '../context/auth';
import {View, Text, ActivityIndicator} from 'react-native';


import AuthRoutes from './authRoutes'
import BottomApp from './bottomApp'


const Routes = () => {
    const {signed, loading} = useContext(AuthContext);


    if(loading){
        return (
            <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue'
            }}
            >
                <ActivityIndicator size={20} color='red'/>

            </View>
        )
    }

    return (
        signed ? <BottomApp /> : <AuthRoutes />
     )
}


export default Routes;