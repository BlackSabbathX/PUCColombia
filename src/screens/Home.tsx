import React from 'react';
import {CenteredContainer} from '../components/Container';
import {Logo} from '../components/Logo';
import {BlockButton} from '../components/Button';
import {SearchBar} from '../components/Header';

interface Props {
    navigation: any,
}

class Home extends React.Component<Props> {

    onButtonClick = () => this.props.navigation.navigate('Classes', {account: null, nextLevel: 'Groups'});

    render() {
        return (
            <CenteredContainer>
                <SearchBar onExtraButtonPress={() => this.props.navigation.navigate('Settings')}/>
                <Logo/>
                <BlockButton text={'Ver todas las cuentas'} onPress={this.onButtonClick}/>
            </CenteredContainer>
        );
    }
}

export default Home;