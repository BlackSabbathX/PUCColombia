import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: 'rgba(0, 0, 0, .5)',
    $iconColor: '$textColor',
    container: {
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '$bgColorDark',
        marginHorizontal: 7,
        marginBottom: 7,
        paddingHorizontal: 20,
    },
    cardContainer: {
        borderRadius: 3,
        marginHorizontal: 7,
        marginBottom: 7,
        backgroundColor: '$bgColorDark',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    cardTitle: {
        fontFamily: '$defaultFont',
        fontSize: 20,
        color: '$textColor',
        flex: 1,
    },
    cardTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardBody: {
        marginTop: 10,
        fontFamily: '$defaultFont',
        fontSize: 16,
        color: '$textColor'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: '$textColor',
        fontSize: 16,
        fontFamily: '$defaultFont',
        flex: 1,
        marginVertical: 15
    },
    shape: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 10,
    },
});