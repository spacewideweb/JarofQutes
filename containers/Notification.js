import React, { Component } from 'react';
import { View } from 'react-native';
import { SideMenuIcon } from '../components/SideMenuIcon';

export default class NotificationScreen extends Component {
    static navigationOptions = {
        headerLeft: (
            <SideMenuIcon
                onPress={() => _this._onPressMenu()}/>
        )
    }

    componentDidMount = () => {
        _this = this;
    }

    _onPressMenu = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View></View>
        )
    }
}