import {Platform} from "react-native";

interface Theme {
    $theme: string,
    $bgColor: string,
    $bgColorDark: string,
    $accentColor: string,
    $textColor: string,
    $textAccentColor: string,
}

const iconPrefix: string = Platform.OS === 'ios' ? 'ios' : 'md';

const themeByName = (name: string | null): Theme => {
    if (!name) return dark;
    switch (name) {
        case dark.$theme: return dark;
        case blue.$theme: return blue;
        default: return purple;
    }
};

const themeThis = (theme: Theme) => ({
    $defaultFont: 'hk-grotex',
    // $outline: 1,
    ...theme
});

const dark: Theme = {
    $theme: 'dark',
    $bgColor: '#333333',
    $bgColorDark: '#242424',
    $accentColor: '#34CC67',
    $textColor: '#FFFFFF',
    $textAccentColor: '#333333',
};

const blue: Theme = {
    $theme: 'blue',
    $bgColor: '#1F2C5B',
    $bgColorDark: '#19214B',
    $accentColor: '#FF4F32',
    $textColor: '#FFFFFF',
    $textAccentColor: '#FFFFFF',
};

const purple: Theme = {
    $theme: 'purple',
    $bgColor: '#60008f',
    $bgColorDark: '#4D0074',
    $accentColor: '#FFCC00',
    $textColor: '#FFFFFF',
    $textAccentColor: '#4D0074',
};

export {dark, blue, purple, Theme, iconPrefix, themeThis, themeByName};
