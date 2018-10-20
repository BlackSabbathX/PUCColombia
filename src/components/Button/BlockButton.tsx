import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import style from './style';

interface Props {
    text: string,
    onPress: () => void
}

class BlockButton extends React.Component<Props> {
    render() {
        const {text, onPress} = this.props;
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={style.buttonStyle}>
                    <Text style={style.buttonText}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default BlockButton;