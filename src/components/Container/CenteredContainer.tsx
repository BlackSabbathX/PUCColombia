import React from 'react';
import {View} from 'react-native';
import style from './style';

interface Props {
    children: Element[] | Element,
}

class CenteredContainer extends React.Component<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={style.centeredContainer}>
                {children}
            </View>
        );
    }
}

export default CenteredContainer;