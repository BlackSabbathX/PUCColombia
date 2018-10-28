import {BY_CODE, SearchActions, SearchCriteria, SET_SEARCH} from "../actions/search";

interface State {
    text: string,
    searchCriteria: SearchCriteria,
}

const initialState: State = {
    text: '',
    searchCriteria: BY_CODE,
};

export default (state: State = initialState, action: SearchActions): State => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                text: action.newText,
                searchCriteria: action.criteria,
            };
        default:
            return state;
    }
}