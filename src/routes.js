import { createAppContainer } from 'react-navigation';
import  {createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';
import User from './pages/user';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
        },
        {
            headerLayoutPreset: 'center',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: "#7159c1",
                },
                headerTintColor: "#FFF",
                animationEnabled: true,
            },
        }

    )
);


export default Routes;