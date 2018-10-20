import React from 'react';
import Navigator from './config/routes';
import EStylesheet from 'react-native-extended-stylesheet';
import {blue} from './config/themes';
import {Platform} from 'react-native';

EStylesheet.build({
    $theme: 'light',
    $defaultFont: Platform.OS === 'ios' ? null : 'sans-serif-light',
    ...blue,
    // $outline: 1
});

class App extends React.Component {
    render() {
        return (
            <Navigator onNavigationStateChange={null}/>
        );
    }
}

export default App;