import React from 'react';
import Navigator from './config/routes';
// @ts-ignore
import {Provider} from 'react-redux';
import store from './config/store';
import {Font} from "expo";
import EStylesheet from "react-native-extended-stylesheet";
import {themeByName, themeThis} from "./config/themes";
import {AsyncStorage, View} from "react-native";

interface State {
    onSplash: boolean
}

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {onSplash: true};
    }

    shouldComponentUpdate(nextProps: any, nextState: State) {
        return this.state !== nextState;
    }

    componentDidMount() {
        App.loadResources().then(() => this.setState({onSplash: false}));
    }

    static async loadResources() {
        await Font.loadAsync({'hk-grotex': require('../assets/fonts/hk-grotex.ttf')});
        await AsyncStorage.getItem('$theme').then(
            (value: string | null) => EStylesheet.build(themeThis(themeByName(value)))
        );
    }

    render() {
        if (this.state.onSplash) return <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.5)'}}/>;
        return (
            <Provider store={store}>
                <Navigator onNavigationStateChange={null}/>
            </Provider>
        );
    }
}

export default App;
