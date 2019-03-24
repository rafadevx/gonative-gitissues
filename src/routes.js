import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Welcome,
      Issues,
    },
    {
      initialRouteName: 'Welcome',
    },
  ),
);

export default Routes;
