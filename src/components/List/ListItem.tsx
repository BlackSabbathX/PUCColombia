import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import style from './style';
import CheckableIndicator from './CheckableIndicator';

interface Props {
    text: string,
    onPress: () => void,
    customIndicator?: Element,
    isFirst?: boolean,
}

class ListItem extends React.Component<Props> {
    render() {
        const {text, onPress, customIndicator, isFirst} = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                style={[style.container, {marginTop: isFirst ? 7 : 0}]}
                underlayColor={style.$underlayColor}>
                <View style={style.wrapper}>
                    <Text
                        numberOfLines={1}
                        style={style.text}>{text}</Text>
                    {
                        customIndicator ?
                            customIndicator :
                            <CheckableIndicator/>
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItem;