import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsRoutes} from '../routing/tabs.routes';

const Tab = createBottomTabNavigator();

export function TabsScreen() {
  return (
    <Tab.Navigator>
      {TabsRoutes.map(screen => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={screen.options}
          key={screen.name}
        />
      ))}
    </Tab.Navigator>
  );
}
