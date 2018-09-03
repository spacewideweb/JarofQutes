import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeStack from '../navigation/HomeNavigator';
import NotificationStack from '../navigation/NotificationNavigator';

export default createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Notification: {
        screen: NotificationStack
    }
})