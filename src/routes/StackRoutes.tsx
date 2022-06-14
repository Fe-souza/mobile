import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FormClients } from 'screens/FormClients';
import { FormSchedule } from 'screens/FormSchedule';
import { FormServices } from 'screens/FormServices';
import { Services } from 'screens/Services';
import { TabRoutes } from './TabRoutes';



const { Navigator, Screen, Group } = createNativeStackNavigator();

export function StackRoutes() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      
        <Group>
          <Screen name="TabRoutes" component={TabRoutes} />
          <Screen name="Services" component={Services} />
          <Screen name="FormSchedule" component={FormSchedule} />
          <Screen name="FormServices" component={FormServices} />
          <Screen name="FormClients" component={FormClients} />
        </Group>
   
    </Navigator>
  );
}
