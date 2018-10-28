import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: 'rgba(0, 0, 0, .5)',
    $text: '$textColor',
    container: {
        alignItems: 'center',
        backgroundColor: '$bgColorDark',
        marginHorizontal: 7,
        marginBottom: 7,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    closeButton: {
        width: 20,
        height: 20,
        marginStart: 10
    },
    cardContainer: {
        marginHorizontal: 7,
        marginBottom: 7,
        backgroundColor: '$bgColorDark',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 4,
    },
    cardTitle: {
        fontFamily: '$defaultFont',
        fontSize: 20,
        color: '$textColor',
    },
    cardTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTitleContainer: {
        flex: 1
    },
    cardBody: {
        marginTop: 10,
        fontFamily: '$defaultFont',
        fontSize: 16,
        color: '$textColor',
        overflow: 'hidden'
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