import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;

export default EStyleSheet.create({
    $tintColor: '$bgColor',
    $shapeColor: '$bgColorDark',
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    shape: {
        width: windowWidth * 50 / 100,
        height: windowWidth * 50 / 100,
        borderRadius: windowWidth * 9 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$textColor',
    },
    logo: {
        width: '75%',
    },
    text: {
        marginTop: 17,
        color: '$textColor',
        fontSize: 30,
        fontFamily: '$defaultFont',
    }
});