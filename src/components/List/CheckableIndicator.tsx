import React from 'react';
import {Image, View} from 'react-native';
import style from './style';

interface Props {
    icon?: string,
    shapeColor?: string,
}

class CheckableIndicator extends React.Component<Props> {
    render() {
        const {icon, shapeColor} = this.props;
        return (
            <View style={[style.shape, {backgroundColor: shapeColor}]}>
                <Image
                    resizeMode={'contain'}
                    style={style.logo}
                    source={require('./images/next-arrow.png')}/>
            </View>
        );
    }
}

export default CheckableIndicator;
