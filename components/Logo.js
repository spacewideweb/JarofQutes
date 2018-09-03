import React from 'react';
import { Image } from 'react-native';

const Logo = (props) => {
    const { container } = styles;
    return (
        <Image
            source={require('../resources/images/logo.png')}
            style={container}/>
    )
}

const styles = {
    container: {
        width: 100,
        height: 40,
        resizeMode:'cover'
    }
}
export { Logo };