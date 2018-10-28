import React from "react";
import styles from './styles';
import {View} from "react-native";

interface Props {
    children: Element[] | Element,
}

class Container extends React.Component<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }
}

export default Container;