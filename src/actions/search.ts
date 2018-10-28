const SET_SEARCH: string = 'SET_SEARCH';
const BY_CODE: string = 'BY_CODE';
const BY_NAME = 'BY_NAME';

const setSearch = (newText: string) => {
    return {
        type: SET_SEARCH,
        newText: newText,
        // @ts-ignore
        criteria: isNaN(newText) ? BY_NAME : BY_CODE
    }
};

// @ts-ignore
type SearchActions = setSearch;
// @ts-ignore
type SearchCriteria = BY_CODE | BY_NAME;

export {SET_SEARCH, BY_NAME, BY_CODE, setSearch, SearchActions, SearchCriteria};