import React from 'react';
import {Animated} from 'react-native';
import styles from './styles';

interface Props {
    children: Element[] | Element,
}

interface State {
    opacity: Animated.Value
}

class CenteredContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {opacity: new Animated.Value(0)};
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {toValue: 1, duration: 1000}
        ).start();
    }

    render() {
        const {children} = this.props;
        return (
            <Animated.View style={[styles.centeredContainer, {opacity: this.state.opacity}]}>
                {children}
            </Animated.View>
        );
    }
}

export default CenteredContainer;