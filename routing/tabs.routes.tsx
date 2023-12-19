import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {TabScreen1, TabScreen2, TabScreen3} from '../screens';
import Route from './route';

export const TabsRoutes: Route<BottomTabNavigationOptions>[] = [
  {
    name: '/tab-1',
    component: TabScreen1,
    options: {title: 'Tab 1', tabBarLabel: 'Tab 1'},
  },
  {
    name: '/tab-2',
    component: TabScreen2,
    options: {title: 'Tab 2', tabBarLabel: 'Tab 2'},
  },
  {
    name: '/tab-3',
    component: TabScreen3,
    options: {title: 'Tab 3', tabBarLabel: 'Tab 3'},
  },
];
