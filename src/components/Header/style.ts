import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, StatusBar} from 'react-native';

const windowWidth = Dimensions.get('screen').width;

export default EStyleSheet.create({
    $selectionColor: '$textColor',
    root: {
        marginTop: StatusBar.currentHeight + 10,
        width: windowWidth - 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: windowWidth - 55,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$bgColorDark',
        borderRadius: 5,
    },
    input: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        color: '$textColor',
        fontFamily: '$defaultFont',
        fontSize: 16,
    },
    searchButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    text: {
        color: '$textColor',
        fontFamily: 'sans-serif-thin',
        fontSize: 16,
    },
    settingsIcon: {
        height: 25,
        width: 25,
        tintColor: '$textColor',
        marginStart: 10,
    },
    header: {
        marginTop: StatusBar.currentHeight,
        width: '100%',
        height: 50,
        elevation: 3,
        backgroundColor: '$bgColor',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backArrow: {
        width: 17,
        height: 17,
        tintColor: '$textColor',
        marginEnd: 15
    },
    title: {
        fontFamily: '$defaultFont',
        fontSize: 20,
        color: '$textColor',
        flex: 1,
    }
});