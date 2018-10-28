import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

class Logo extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.shape}>
                    <Image
                        resizeMode={'contain'}
                        source={require('./images/home-logo.png')}
                        style={[styles.logo, {tintColor: styles.$tintColor}]}/>
                </View>
                <Text style={styles.text}>PUC Colombia</Text>
            </View>
        );
    }
}

export default Logo;