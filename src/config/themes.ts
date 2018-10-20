interface Theme {
    $bgColor: string,
    $bgColorDark: string,
    $accentColor: string,
    $textColor: string,
    $textAccentColor: string,
}

const dark: Theme = {
    $bgColor: '#333333',
    $bgColorDark: '#242424',
    $accentColor: '#34CC67',
    $textColor: '#FFFFFF',
    $textAccentColor: '#333333',
}

const blue: Theme = {
    $bgColor: '#1F2C5B',
    $bgColorDark: '#19214B',
    $accentColor: '#FF4F32',
    $textColor: '#FFFFFF',
    $textAccentColor: '#FFFFFF',
}

const purple: Theme = {
    $bgColor: '#670099',
    $bgColorDark: '#5A0088',
    $accentColor: '#FFCC00',
    $textColor: '#FFFFFF',
    $textAccentColor: '#5A0088',
}

export {dark, blue, purple, Theme};
