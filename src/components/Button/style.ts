import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    buttonStyle: {
        paddingVertical: 10,
        backgroundColor: '$accentColor',
    },
    buttonText: {
        color: '$textAccentColor',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: '$defaultFont',
    },
});