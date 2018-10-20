import React from 'react';
import {Container} from "../components/Container";
import Header from "../components/Header/Header";
import ListItem from "../components/List/ListItem";
import {Linking, ScrollView} from "react-native";
import CardItem from "../components/List/CardItem";

interface Props {
    navigation: any,
}

class Settings extends React.Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <ScrollView>
                    <Header onGoBackPress={() => navigation.pop()} headerText={'Configuración'}/>
                    <ListItem
                        isFirst={true}
                        text={'Temas'}
                        onPress={() => navigation.navigate('Themes')}
                        iconName={'color-palette'}
                        iconWithOsPrefix={true}
                        customIconSize={27}/>
                    <ListItem
                        text={'Github'}
                        onPress={() => Linking.openURL('https://github.com/BlackSabbathX/PUCColombia')}
                        iconName={'logo-github'}
                        iconWithOsPrefix={false}
                        customIconSize={27}/>
                    <CardItem titleText={'Acerca de'}
                              bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                </ScrollView>
            </Container>
        );
    }
}

export default Settings;