import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

interface Props {
    onGoBackPress: () => void,
    headerText: string
}

class Header extends React.Component<Props> {
    render() {
        const {onGoBackPress, headerText} = this.props;
        return (
            <View style={style.header}>
                <TouchableOpacity onPress={onGoBackPress}>
                    <Image resizeMode={'contain'} style={style.backArrow} source={require('./images/back-arrow.png')}/>
                </TouchableOpacity>
                <Text numberOfLines={1} style={style.title}>{headerText}</Text>
            </View>
        );
    }
}

export default Header;