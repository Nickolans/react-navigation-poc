import {HeaderRightButton, SimpleButton} from '../components';
import {ExampleScreen, TabsScreen} from '../screens';
import Route from './route';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const StackRoutes: Route<NativeStackNavigationOptions>[] = [
  {
    name: '/',
    component: TabsScreen,
    options: {headerShown: false, title: 'Tab 1'},
  },
  {
    name: '/example-fade',
    component: ExampleScreen,
    options: {
      animation: 'fade',
      title: 'Example Fade',
    },
  },
  {
    name: '/example-push',
    component: ExampleScreen,
    options: {
      animation: 'simple_push',
      title: 'Example Push',
    },
  },
  {
    name: '/example-slide-from-right',
    component: ExampleScreen,
    options: {
      animation: 'slide_from_right',
      title: 'Example Slide From Right',
    },
  },
  {
    name: '/example-slide-from-bottom',
    component: ExampleScreen,
    options: {
      animation: 'slide_from_bottom',
      title: 'Example Slide From Bottom',
    },
  },
  {
    name: '/example-none',
    component: ExampleScreen,
    options: {
      animation: 'none',
      title: 'No Animation',
    },
  },
  {
    name: '/example-default',
    component: ExampleScreen,
    options: {
      animation: 'default',
      title: 'Default',
      headerRight: () => (
        <HeaderRightButton navigateTo="/example-slide-from-right" />
      ),
    },
  },
];
