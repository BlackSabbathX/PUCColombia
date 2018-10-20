import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    buttonStyle: {
        paddingVertical: 8,
        backgroundColor: '$accentColor',
        width: '95%',
        margin: 10,
        borderRadius: 50,
        elevation: 1,
    },
    buttonText: {
        color: '$textAccentColor',
        fontSize: 22,
        fontWeight: '200',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: '$defaultFont'
    },
});