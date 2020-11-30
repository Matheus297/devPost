import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Feather from 'react-native-vector-icons/Feather'



import Home from '../pages/Home/index';
import Profile from '../pages/Profile/index';
import NewPost from '../pages/NewPost/index';
import PostsUser from '../pages/PostsUser/index';
import Search from '../pages/Search/index';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen(){
    return (
        <Stack.Navigator>
             <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
             <Stack.Screen name='NewPost' component={NewPost}/>
             <Stack.Screen name='PostsUser' component={PostsUser}/>
        </Stack.Navigator>
    )
}

const BottomApp = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                style:{
                    backgroundColor: "#282225",
                    borderTopWidth: 0,
                },
                activeTintColor: "#fff"
            }}
        
        >
            <Tabs.Screen 
                name='Home' 
                component={StackScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}
                />
            <Tabs.Screen 
                name='Search' 
                component={Search}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="search" color={color} size={size} />
                    }
                }}
                />
            <Tabs.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="user" color={color} size={size} />
                    }
                }}
                />
                
        </Tabs.Navigator>
    )
}


export default BottomApp;