import React from 'react';
import {Image, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import style from './style';

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
                    <Image
                        resizeMode={'contain'}
                        style={style.settingsIcon}
                        source={require('./images/settings-logo.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchBar;