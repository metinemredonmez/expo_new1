// navigation/AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        // AuthNavigator.js
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>

    );
};

export default AuthNavigator;
