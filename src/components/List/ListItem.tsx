import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {iconPrefix} from "../../config/themes";

interface Props {
    text: string,
    onPress: (representativeData: any) => void,
    iconWithOsPrefix: boolean,
    isFirst?: boolean,
    customIconSize?: number,
    customShapeColor?: string,
    iconName?: string | null,
    representativeData?: any,
    shouldReRender?: boolean
}

class ListItem extends React.Component<Props> {
    shouldComponentUpdate() {
        const {shouldReRender = false} = this.props;
        return shouldReRender;
    }

    _onClick = () => {
        const {onPress, representativeData} = this.props;
        onPress(representativeData);
    };

    render() {
        const {text, iconName, isFirst, iconWithOsPrefix, customIconSize, customShapeColor} = this.props;
        return (
            <TouchableHighlight
                onPress={this._onClick}
                style={[styles.container, {marginTop: isFirst ? 9 : 0}]}
                underlayColor={styles.$underlayColor}>
                <View style={styles.wrapper}>
                    <Text
                        numberOfLines={1}
                        style={styles.text}>{text}</Text>
                    <View
                        style={[styles.shape, {backgroundColor: customShapeColor || 'transparent'}]}>
                        {
                            iconName ?
                                <Ionicons
                                    style={styles.logo}
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
                                    color={styles.$text}/> :
                                null
                        }
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItem;