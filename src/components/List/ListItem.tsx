import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import style from './style';
import {iconPrefix} from "../../config/themes";

interface Props {
    text: string,
    onPress: () => void,
    iconName: string,
    iconWithOsPrefix: boolean,
    isFirst?: boolean,
    customIconSize?: number,
    customShapeColor?: string,
}

class ListItem extends React.Component<Props> {
    render() {
        const {text, onPress, iconName, isFirst, iconWithOsPrefix, customIconSize, customShapeColor} = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                style={[style.container, {marginTop: isFirst ? 9 : 0}]}
                underlayColor={style.$underlayColor}>
                <View style={style.wrapper}>
                    <Text
                        numberOfLines={1}
                        style={style.text}>{text}</Text>
                    <View
                        style={[style.shape, {backgroundColor: customShapeColor || 'transparent'}]}>
                        <Ionicons
                            style={style.logo}
                            name={
                                iconWithOsPrefix ?
                                    `${iconPrefix}-${iconName}` :
                                    `${iconName}`
                            }
                            size={
                                customIconSize ?
                                    customIconSize :
                                    20
                            }
                            color={style.$iconColor}/>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItem;