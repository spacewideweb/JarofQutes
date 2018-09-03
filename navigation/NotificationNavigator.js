import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import NotificationScreen from '../containers/Notification';

export default NotificationStack = createStackNavigator({
    Main: {
        screen: NotificationScreen
    }
})