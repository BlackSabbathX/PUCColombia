import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: 'rgba(0, 0, 0, .5)',
    container: {
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '$bgColorDark',
        marginHorizontal: 5,
        marginBottom: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    text: {
        color: '$textColor',
        fontSize: 16,
        fontFamily: '$defaultFont',
        flex: 1
    },
    shape: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 17,
        width: 17,
        tintColor: '$textColor'
    },
});