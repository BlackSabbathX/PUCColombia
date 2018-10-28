import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// @ts-ignore
import {connect} from 'react-redux';
import {blue, dark, iconPrefix, purple, Theme, themeThis} from '../config/themes';
import {AsyncStorage, ScrollView, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import {ListItem} from '../components/List';
import {Header, Icon} from "react-native-elements";
import styles from "./styles";

interface Props {
    navigation: any,
}

interface State {
    actualTheme: string,
    toRender: boolean,
}

class Themes extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            toRender: false,
            actualTheme: EStyleSheet.value('$theme'),
        }
    }

    shouldComponentUpdate(nexProps: Props, nextState: State) {
        return this.state !== nextState;
    }

    setTheme = (theme: Theme) => {
        AsyncStorage.setItem('$theme', theme.$theme);
        const {navigation} = this.props;
        EStyleSheet.build(themeThis(theme));
        this.setState({toRender: true}, () => this.setState({toRender: false}));
        navigation.state.params.reRender();
        navigation.pop();
    };

    goBack = () => this.props.navigation.pop();

    render() {
        const {toRender, actualTheme} = this.state;
        if (toRender) return null;
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
                    centerComponent={{text: 'Temas', style: styles.textStyle}}
                    backgroundColor={styles.$bg2}
                    outerContainerStyles={styles.outerContainerStyles}
                    innerContainerStyles={styles.innerContainerStyles}/>
                <ScrollView>
                    <ListItem
                        representativeData={dark}
                        isFirst={true}
                        text={'Oscuro'}
                        onPress={this.setTheme}
                        iconName={
                            actualTheme === dark.$theme ?
                                'checkmark' :
                                null
                        }
                        iconWithOsPrefix={true}
                        customIconSize={25}
                        customShapeColor={dark.$bgColorDark}/>
                    <ListItem
                        representativeData={blue}
                        text={'Azul'}
                        onPress={this.setTheme}
                        iconName={
                            actualTheme === blue.$theme ?
                                'checkmark' :
                                null
                        }
                        iconWithOsPrefix={true}
                        customIconSize={25}
                        customShapeColor={blue.$bgColorDark}/>
                    <ListItem
                        representativeData={purple}
                        text={'Púrpura'}
                        onPress={this.setTheme}
                        iconName={
                            actualTheme === purple.$theme ?
                                'checkmark' :
                                null
                        }
                        iconWithOsPrefix={true}
                        customIconSize={25}
                        customShapeColor={purple.$bgColorDark}/>
                </ScrollView>
            </Container>
        );
    }
}

export default Themes;