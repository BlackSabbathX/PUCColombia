import React from 'react';
import styles from './styles';
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface Props {
    titleText: string,
    bodyText: string,
    isFirst?: boolean,
    collapsable: boolean,
    children?: Element | Element[]
}

interface State {
    expanded: boolean,
    caretName: string,
    animation: Animated.Value,
    minHeight?: number,
    maxHeight?: number,
}

const UP = 'up';
const DOWN = 'down';

class CardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: true,
            caretName: 'md-arrow-dropdown',
            // @ts-ignore
            animation: new Animated.Value(),
        };
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return this.state.expanded !== nextState.expanded;
    }

    setMinHeight = (event: any) => this.setState({minHeight: event.nativeEvent.layout.height});

    setMaxHeight = (event: any) => this.setState({maxHeight: event.nativeEvent.layout.height});

    toogle = () => {
        const {expanded, maxHeight = 0, minHeight = 0} = this.state;
        const initialValue = expanded ?
            maxHeight + minHeight + 40 :
            minHeight + 30;
        const finalValue = expanded ?
            minHeight + 30 :
            maxHeight + minHeight + 40;
        this.setState({
            expanded: !expanded,
            caretName: `md-arrow-drop${expanded ? UP : DOWN}`
        });
        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue,
            }
        ).start();
    };

    render() {
        const {titleText, bodyText, isFirst, collapsable} = this.props;
        return (
            <Animated.View style={[styles.cardContainer, {marginTop: isFirst ? 9 : 0, height: this.state.animation}]}>
                <View style={styles.cardTitleWrapper}>
                    <View style={styles.cardTitleContainer}>
                        <Text
                            onLayout={this.setMinHeight}
                            style={styles.cardTitle}>{titleText}</Text>
                    </View>
                    {collapsable ?
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={this.toogle}>
                            <Ionicons
                                name={this.state.caretName}
                                size={20}
                                color={styles.$text}/>
                        </TouchableOpacity> :
                        null
                    }
                </View>
                <Text onLayout={this.setMaxHeight} style={styles.cardBody}>{bodyText}</Text>
            </Animated.View>
        );
    }
}

export default CardItem;
