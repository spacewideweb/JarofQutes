import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { Logo } from '../components/Logo';
import { SideMenuIcon } from '../components/SideMenuIcon';
import { CategoryLabel } from '../components/CategoryLabel';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 240;

const QUOTES_URL = 'https://www.jarofquotes.com/api.php?';
const QUOTE_IMAGE_URL = 'https://www.jarofquotes.com/quotes/';

export default class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: <Logo/>,
        headerLeft: (
            <SideMenuIcon
                onPress={() => _this._onPressMenu()}/>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            isError: false,
            quotes : [],
        }
    }

    componentDidMount = () => {
        _this = this;
        this._fetchQuotes('love', 1);
    }

    _fetchQuotes = (category, page) => {
        const url = `${QUOTES_URL}category=${category}&amp;page=${page}`;
        this.setState({isFetching: true, isError: false})
        fetch(url)
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    isFetching: false,
                    isError: false,
                    quotes: responseJSON
                })
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isFetching: false,
                    isError: true,
                    quotes : []
                })
            })
    }

    _renderItem = (item) => {
        const url = `${QUOTE_IMAGE_URL}${item.id}.jpg`;
        return (
            <TouchableOpacity 
                style={styles.itemContainer}
                onPress={this._onPressItem}>
                <FastImage
                    style={styles.quoteItem}
                    source={{
                        uri: url,
                        priority: FastImage.priority.high
                    }}
                    resizeMode={FastImage.resizeMode.stretch}/>
            </TouchableOpacity>
        )
    }

    _onPressItem = () => {
        this.props.navigation.navigate('Detail');
    }

    _onPressMenu = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {

        if (this.state.isFetching) {
            return (
                <View style={{flex: 1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <CategoryLabel
                    title="Love Quotes"/>
                <FlatList
                    style={styles.list}
                    data={this.state.quotes}
                    renderItem={({item}) => this._renderItem(item)}
                    keyExtractor={item => item.quote}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    list: {
        flex: 1,
    },
    itemContainer: {
        width: WIDTH,
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quoteItem: {
        width: WIDTH - 20,
        height: ITEM_HEIGHT - 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    }
})