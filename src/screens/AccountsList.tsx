import React from 'react';
import Container from "../components/Container/Container";
import CardItem from "../components/List/CardItem";
import {FlatList, Text, TouchableOpacity} from "react-native";
import ListItem from "../components/List/ListItem";
import {GeneralAccount} from "../data/puc";
import {Header, Icon} from "react-native-elements";
import {iconPrefix} from "../config/themes";
import styles from "./styles";

interface Props {
    navigation: any,
}

class AccountList extends React.Component<Props> {
    shouldComponentUpdate() {
        return false;
    }

    navigateNext = (account: any) => this.props.navigation.push('Accounts', {account: account});

    goBack = () => this.props.navigation.pop();

    render() {
        const {account} = this.props.navigation.state.params;
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
                        <Text style={styles.textStyle}>{account.code.toString()}</Text>
                    }
                    backgroundColor={styles.$bg2}
                    outerContainerStyles={styles.outerContainerStyles}
                    innerContainerStyles={styles.innerContainerStyles}/>
                <CardItem
                    collapsable={true}
                    isFirst={true}
                    titleText={account.name}
                    bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                <FlatList
                    data={account[account.subname]}
                    keyExtractor={(item: GeneralAccount) => item.code.toString()}
                    renderItem={
                        ({item, index}) =>
                            <ListItem
                                iconSize={15}
                                representativeData={item}
                                text={`${item.code}   ${item.name}`}
                                onPress={this.navigateNext}
                                isFirst={index === 0}
                                iconName={'ios-arrow-forward'}/>
                    }/>
            </Container>
        );
    }
}

export default AccountList;
