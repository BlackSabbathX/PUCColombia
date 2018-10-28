import EStyleSheet from "react-native-extended-stylesheet";
import {StatusBar} from "react-native";


export default EStyleSheet.create({
    $text: '$textColor',
    $text2: '$textAccentColor',
    $accent: '$accentColor',
    $bg2: '$bgColorDark',
    textStyle: {
        color: '$textColor',
        fontSize: 17,
        fontFamily: '$defaultFont',
    },
    innerContainerStyles: {
        justifyContent: 'space-between',
    },
    outerContainerStyles: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    button: {
        paddingHorizontal: 10,
    },
    containerStyle: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '$bgColorDark',
    },
    inputStyle: {
        backgroundColor: '$bgColor',
        color: '$textColor',
        fontFamily: '$defaultFont',
    },
});