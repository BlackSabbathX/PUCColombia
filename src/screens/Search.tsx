import React from 'react';
import {FlatList} from 'react-native';
import {GeneralAccount, pureToComplete, search} from '../data/puc';
// @ts-ignore
import {connect} from 'react-redux';
import Container from "../components/Container/Container";
import {SearchBar} from "react-native-elements";
import styles from "./styles";
import {SearchCriteria, setSearch} from "../actions/search";
import ListItem from "../components/List/ListItem";

interface Props {
    navigation: any,
    dispatch: (action: any) => void,
    text: string,
    searchCriteria: SearchCriteria,
}

class Search extends React.Component<Props> {
    navigateNext = (account: any) => this.props.navigation.push('Accounts', {account: pureToComplete(account)});

    setSearch = (e: any) => {
        // @ts-ignore
        this.refs.list.scrollToOffset({offset: 0, animated: true});
        this.props.dispatch(setSearch(e.nativeEvent.text.trim()));
    };

    render() {
        const {text, searchCriteria} = this.props;
        return (
            <Container>
                <SearchBar
                    onEndEditing={e => this.setSearch(e)}
                    defaultValue={text}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder={'Buscar cuenta...'}
                    containerStyle={[styles.containerStyle, styles.outerContainerStyles]}
                    inputStyle={styles.inputStyle}
                    placeholderTextColor={'rgba(255,255,255,.5)'}
                    icon={{type: 'feather', name: 'search', color: 'rgba(255,255,255,.5)'}}/>
                <FlatList
                    data={search(text, searchCriteria)}
                    ref={'list'}
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
                    }>
                </FlatList>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => ({
    text: state.search.text,
    searchCriteria: state.search.searchCriteria
});

export default connect(mapStateToProps)(Search);
