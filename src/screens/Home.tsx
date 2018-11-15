import React from 'react';
import {CenteredContainer} from '../components/Container';
import {Logo} from '../components/Logo';
import {Header, Icon} from 'react-native-elements';
import styles from "./styles";
import {iconPrefix} from "../config/themes";
import {Text, TouchableOpacity, View} from "react-native";


interface Props {
    navigation: any,
}

interface State {
    toRender: boolean,
}

class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {toRender: false};
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return this.state !== nextState;
    }

    reRender = () => this.setState(
        {toRender: true},
        () => this.setState({toRender: false})
    );

    goToSettings = () => this.props.navigation.navigate('Settings', {reRender: this.reRender});

    goToClassList = () => this.props.navigation.navigate('Classes');

    goToSearch = () => this.props.navigation.navigate('Search');

    render() {
        if (this.state.toRender) return null;
        return (
            <CenteredContainer>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    rightComponent={
                        <Icon
                            name={`${iconPrefix}-settings`}
                            type={'ionicon'}
                            color={styles.$text}
                            onPress={this.goToSettings}
                            underlayColor={'rgba(0,0,0,.5)'}
                            component={TouchableOpacity}/>
                    }
                    leftComponent={
                        <View style={{width: 20}}/>
                    }
                    centerComponent={
                        <Text style={styles.textStyle}>Bienvenido</Text>
                    }
                    backgroundColor={styles.$bg2}
                    innerContainerStyles={styles.innerContainerStyles}
                    outerContainerStyles={styles.outerContainerStyles}/>
                <Logo/>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    leftComponent={
                        <Icon
                            name={`list`}
                            type={'feather'}
                            color={styles.$text2}
                            onPress={this.goToClassList}
                            containerStyle={styles.button}
                            underlayColor={'rgba(0,0,0,.5)'}
                            component={TouchableOpacity}/>
                    }
                    rightComponent={
                        <Icon
                            name={`${iconPrefix}-search`}
                            type={'ionicon'}
                            color={styles.$text2}
                            onPress={this.goToSearch}
                            containerStyle={styles.button}
                            underlayColor={'rgba(0,0,0,.5)'}
                            component={TouchableOpacity}/>
                    }
                    backgroundColor={styles.$accent}
                    outerContainerStyles={[styles.outerContainerStyles, {
                        height: 45,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }]}
                    innerContainerStyles={styles.innerContainerStyles}/>
            </CenteredContainer>
        );
    }
}

export default Home;