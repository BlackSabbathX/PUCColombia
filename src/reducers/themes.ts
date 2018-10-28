import {CHANGE_THEME, ThemesActions} from '../actions/themes';

interface State {
    theme: string,
}

const initialState: State = {
    theme: 'dark',
}

export default (state: State = initialState, action: ThemesActions): State => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.newTheme
            };
        default:
            return state;
    }
}