import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, StatusBar} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default EStyleSheet.create({
    $selectionColor: '$textColor',
    root: {
        marginTop: statusBarHeight ? statusBarHeight + 10 : 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
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
        marginStart: 10,
    },
    header: {
        marginTop: StatusBar.currentHeight,
        width: '100%',
        height: 50,
        elevation: Platform.OS === 'ios' ? 0 : 3,
        backgroundColor: '$bgColorDark',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backArrow: {
        marginEnd: 15,
    },
    title: {
        fontFamily: '$defaultFont',
        fontSize: 20,
        color: '$textColor',
        flex: 1,
    }
});