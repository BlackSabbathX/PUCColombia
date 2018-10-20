import React from 'react';
import {getChildren} from '../data/puc';
import {Header} from '../components/Header';
import Container from "../components/Container/Container";
import CardItem from "../components/List/CardItem";
import {FlatList} from "react-native";
import ListItem from "../components/List/ListItem";

interface Props {
    navigation: any,
}

class AccountList extends React.Component<Props> {
    navigateNext = (nextLevel: string, account: any) => {
        this.props.navigation.navigate(nextLevel, {
            account: account,
            nextLevel: this.getNextLevel(nextLevel),
        });
    };

    getNextLevel = (level: string): string => {
        switch (level) {
            case 'Groups':
                return 'Accounts';
            case 'Accounts':
                return 'SubAccounts';
            default:
                return '';
        }
    };

    render() {
        const {account, nextLevel} = this.props.navigation.state.params;
        const data = getChildren(account);
        return (
            <Container>
                <Header
                    onGoBackPress={() => this.props.navigation.goBack()}
                    headerText={account ? account.code.toString() : 'Clases'}/>
                {
                    account ?
                        <CardItem isFirst={true}
                                  titleText={account.name}
                                  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/> :
                        null
                }
                <FlatList
                    data={data}
                    keyExtractor={item => item.code.toString()}
                    renderItem={
                        ({item, index}) =>
                            <ListItem
                                text={`${item.code}   ${item.name}`}
                                onPress={() => this.navigateNext(nextLevel, item)}
                                iconWithOsPrefix={false}
                                isFirst={index === 0 && !account}
                                iconName={'ios-arrow-forward'}/>
                    }/>
            </Container>
        );
    }
}

export default AccountList;
