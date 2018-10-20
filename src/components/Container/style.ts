import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '$bgColor'
    },
    container: {
        flex: 1,
        backgroundColor: '$bgColor',
        alignItems: 'center',
    }
});