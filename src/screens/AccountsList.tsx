import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FlatList, View} from 'react-native';
import {getChildren} from '../data/puc';
import {ListItem} from '../components/List';
import {Header} from '../components/Header';

interface Props {
    navigation: any,
}

const style = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgColor'
    }
});

class AccountList extends React.Component<Props> {
    navigateNext = (nextLevel: string, code: number, name: string) => {
        this.props.navigation.navigate(nextLevel, {
            code: code,
            name: name,
            nextLevel: this.getNextLevel(nextLevel),
        });
    }

    getNextLevel = (level: string): string => {
        switch (level) {
            case 'Groups':
                return 'Accounts';
            case 'Accounts':
                return 'SubAccounts';
            default:
                return '';
        }
    }

    render() {
        const {code, nextLevel, name} = this.props.navigation.state.params;
        const data = getChildren(code);
        return (
            <View style={style.container}>
                <Header
                    onGoBackPress={() => this.props.navigation.goBack()}
                    headerText={code == 0 ? 'Clases' : `${code.toString()}   ${name}`}/>
                <FlatList
                    data={data}
                    keyExtractor={item => item.code.toString()}
                    renderItem={
                        ({item, index}) =>
                            <ListItem
                                text={`${item.code}   ${item.name}`}
                                onPress={() => this.navigateNext(nextLevel, item.code, item.name)}
                                isFirst={index === 0}/>
                    }
                />
            </View>
        );
    }
}

export default AccountList;
