// @ts-ignore
import {createStackNavigator} from 'react-navigation';
import {AccountsList, ClassList, Home, Settings, Themes} from '../screens';
import Search from "../screens/Search";

const rootNavigator = createStackNavigator(
    {
        Home: Home,
        Classes: ClassList,
        Accounts: AccountsList,
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
        Settings: Settings,
        Themes: Themes,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }
);

const searchNavigator = createStackNavigator(
    {
        Search: Search,
        Accounts: AccountsList,
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
        Search: searchNavigator
    },
    {
        initialRouteName: 'root',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }
);

