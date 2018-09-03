import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../containers/Home';
import DetailScreen from '../containers/Detail';

export default HomeStack = createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)'}
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    }
})
