// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
    // Giriş durumuna bağlı olarak AuthNavigator veya MainNavigator'ı kullanabilirsiniz.
    const isLoggedIn = false; // Bu durumu gerçek kullanıcı durumuna bağlayın

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default AppNavigator;

