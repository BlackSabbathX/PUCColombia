import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';

interface Props {
    text: string,
    onPress: (representativeData: any) => void,
    iconSize: number,
    isFirst?: boolean,
    customShapeColor?: string,
    iconName?: string | null,
    representativeData?: any,
}

class ListItem extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props) {
        return nextProps.isFirst !== this.props.isFirst;
    }

    _onClick = () => {
        const {onPress, representativeData} = this.props;
        onPress(representativeData);
    };

    render() {
        const {text, iconName, isFirst, iconSize, customShapeColor} = this.props;
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
                                    name={iconName}
                                    size={iconSize}
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