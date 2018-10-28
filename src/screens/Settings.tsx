import React from 'react';
import {iconPrefix} from '../config/themes';
import {Container} from "../components/Container";
import {Header, Icon} from "react-native-elements";
import ListItem from "../components/List/ListItem";
import {Linking, ScrollView, Text, TouchableOpacity} from "react-native";
import CardItem from "../components/List/CardItem";
import styles from "./styles";

interface Props {
    navigation: any,
}

interface State {
    toRender: boolean
}

class Settings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            toRender: false,
        };
    }

    shouldComponentUpdate(nexProps: Props, nextState: State) {
        return this.state !== nextState;
    }

    reRender = () => {
        this.props.navigation.state.params.reRender();
        this.setState(
            {toRender: true},
            () => {
                this.setState({toRender: false});
            }
        );
    };

    goBack = () => this.props.navigation.pop();

    goToThemes = () => this.props.navigation.navigate('Themes', {reRender: this.reRender});

    openGithub = () => Linking.openURL('https://github.com/BlackSabbathX/PUCColombia');

    render() {
        if (this.state.toRender) return null;
        return (
            <Container>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    leftComponent={
                        <Icon
                            name={`${iconPrefix}-arrow-back`}
                            type={'ionicon'}
                            color={styles.$text}
                            onPress={this.goBack}
                            underlayColor={'rgba(0,0,0,.5)'}
                            component={TouchableOpacity}/>
                    }
                    centerComponent={
                        <Text style={styles.textStyle}>Configuración</Text>
                    }
                    backgroundColor={styles.$bg2}
                    outerContainerStyles={styles.outerContainerStyles}
                    innerContainerStyles={styles.innerContainerStyles}/>
                <ScrollView>
                    <ListItem
                        isFirst={true}
                        text={'Temas'}
                        onPress={this.goToThemes}
                        iconName={`${iconPrefix}-color-palette`}
                        iconSize={27}/>
                    <ListItem
                        text={'Github'}
                        onPress={this.openGithub}
                        iconName={'logo-github'}
                        iconSize={27}/>
                    <CardItem
                        collapsable={false}
                        titleText={'Acerca de'}
                        bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                </ScrollView>
            </Container>
        );
    }
}

export default Settings;