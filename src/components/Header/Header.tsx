import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import style from './style';
import {iconPrefix} from "../../config/themes";

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
                    <Ionicons
                        style={style.backArrow}
                        name={`${iconPrefix}-arrow-back`}
                        size={20}
                        color={style.$selectionColor}/>
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={style.title}>{headerText}</Text>
            </View>
        );
    }
}

export default Header;