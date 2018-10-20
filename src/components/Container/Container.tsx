import React from "react";
import style from './style';
import {View} from "react-native";

interface Props {
    children: Element[] | Element,
}

class Container extends React.Component<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={style.container}>
                {children}
            </View>
        );
    }
}

export default Container;