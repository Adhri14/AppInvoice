import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './src/router/MainRouter';
import { StatusBar, View } from 'react-native';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <MainRouter />
        </NavigationContainer>
    )
}

export default App;