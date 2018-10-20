import React from 'react';
import style from './style';
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface Props {
    titleText: string,
    bodyText: string,
    isFirst?: boolean,
    children?: Element | Element[]
}

interface State {
    minHeight?: number,
    maxHeight?: number,
    expanded: boolean,
    animation: Animated.Value,
}

class CardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: true,
            animation: new Animated.Value(),
        };
    }

    setMinHeight = (event: any) => this.setState({
        minHeight: event.nativeEvent.layout.height,
    });
    setMaxHeight = (event: any) => this.setState({
        maxHeight: event.nativeEvent.layout.height,
    });

    toogle = () => {
        let initialValue = this.state.expanded ?
            this.state.maxHeight + this.state.minHeight :
            this.state.minHeight;
        let finalValue = this.state.expanded ?
            this.state.minHeight :
            this.state.maxHeight + this.state.minHeight;
        this.setState({
            expanded: !this.state.expanded
        });
        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue + 30
            }
        ).start();
    };

    render() {
        const {titleText, bodyText, isFirst} = this.props;
        return (
            <Animated.View style={[style.cardContainer, {marginTop: isFirst ? 9 : 0, height: this.state.animation}]}>
                <View style={style.cardTitleWrapper}>
                    <Text
                        numberOfLines={1}
                        onLayout={this.setMinHeight}
                        style={style.cardTitle}>{titleText}</Text>
                    <TouchableOpacity onPress={this.toogle}>
                        <Ionicons
                            name={this.state.expanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'}
                            size={20}
                            color={style.$iconColor}/>
                    </TouchableOpacity>
                </View>
                <Text onLayout={this.setMaxHeight} style={style.cardBody}>{bodyText}</Text>
            </Animated.View>
        );
    }
}

export default CardItem;
