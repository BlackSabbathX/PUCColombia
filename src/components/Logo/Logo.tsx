import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import style from './style';

class Logo extends React.Component {
    render() {
        return (
            <View style={style.wrapper}>
                <ImageBackground
                    resizeMode={'contain'}
                    source={require('./images/quad-round.png')}
                    style={style.shape}>
                    <Image
                        resizeMode={'contain'}
                        source={require('./images/home-logo.png')}
                        style={[style.logo, {tintColor: style.$tintColor}]}/>
                </ImageBackground>
                <Text style={style.text}>PUC Colombia</Text>
            </View>
        );
    }
}

export default Logo;