// components/Common/LoadingIndicator.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingIndicator = () => {
    return (
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingIndicator;
