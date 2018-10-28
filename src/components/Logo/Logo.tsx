import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './styles';

class Logo extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <ImageBackground
                    resizeMode={'contain'}
                    source={require('./images/quad-round.png')}
                    style={styles.shape}>
                    <Image
                        resizeMode={'contain'}
                        source={require('./images/home-logo.png')}
                        style={[styles.logo, {tintColor: styles.$tintColor}]}/>
                </ImageBackground>
                <Text style={styles.text}>PUC Colombia</Text>
            </View>
        );
    }
}

export default Logo;