import React from 'react';
import Container from "../components/Container/Container";
import {FlatList, TouchableOpacity} from "react-native";
import ListItem from "../components/List/ListItem";
import {completepuc, GeneralAccount} from "../data/puc";
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

    navigateNext = (account: any) => {
        this.props.navigation.navigate('Accounts', {account: account});
    };

    goBack = () => this.props.navigation.pop();

    render() {
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
                    centerComponent={{text: "Clases", style: styles.textStyle}}
                    backgroundColor={styles.$bg2}
                    outerContainerStyles={styles.outerContainerStyles}
                    innerContainerStyles={styles.innerContainerStyles}/>
                <FlatList
                    data={completepuc}
                    keyExtractor={(item: GeneralAccount) => item.code.toString()}
                    renderItem={
                        ({item, index}) =>
                            <ListItem
                                representativeData={item}
                                text={`${item.code}   ${item.name}`}
                                onPress={this.navigateNext}
                                iconWithOsPrefix={false}
                                isFirst={index === 0}
                                iconName={'ios-arrow-forward'}/>
                    }/>
            </Container>
        );
    }
}

export default AccountList;
