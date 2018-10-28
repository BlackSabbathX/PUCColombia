const CHANGE_THEME: string = 'CHANGE_THEME';

const changeTheme = (newTheme: string) => ({
    type: CHANGE_THEME,
    newTheme: newTheme,
});

type ThemesActions = changeTheme;

export {CHANGE_THEME, changeTheme, ThemesActions};