// @ts-ignore
import {createStackNavigator} from 'react-navigation';
import {AccountsList, Home, Settings} from '../screens';

const rootNavigator = createStackNavigator(
    {
        Home: Home,
        Classes: AccountsList,
        Groups: AccountsList,
        Accounts: AccountsList,
        SubAccounts: AccountsList,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }
);

const othersNavigator = createStackNavigator(
    {
        Settings: Settings
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }
);

export default createStackNavigator(
    {
        root: rootNavigator,
        Settings: othersNavigator,
    },
    {
        initialRouteName: 'root',
        headerMode: 'none',
    }
);

