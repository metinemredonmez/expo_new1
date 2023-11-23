// navigation/MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen'; // LoginScreen'ı ekledik

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
