import React from 'react';
import {Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import style from './style';
import {Ionicons} from "@expo/vector-icons";
import {iconPrefix} from "../../config/themes";

interface Props {
    onExtraButtonPress: () => void
}

class SearchBar extends React.Component<Props> {
    render() {
        return (
            <View style={style.root}>
                <View style={style.wrapper}>
                    <TouchableNativeFeedback>
                        <View style={style.searchButton}>
                            <Text style={style.text}>Buscar cuenta</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TextInput
                        placeholder={'1105'}
                        selectionColor={style.$selectionColor}
                        underlineColorAndroid={'transparent'}
                        style={style.input}/>
                </View>
                <TouchableOpacity onPress={this.props.onExtraButtonPress}>
                    <Ionicons
                        style={style.settingsIcon}
                        name={`${iconPrefix}-settings`}
                        size={23}
                        color={style.$selectionColor}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchBar;