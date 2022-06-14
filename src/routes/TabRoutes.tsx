import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box } from 'components/atoms/Box';
import React from 'react';
import { Platform } from 'react-native';
import { Clients } from 'screens/Clients';
import { Home } from 'screens/Home';
import { More } from 'screens/More';
import { useTheme } from 'styled-components/native';


const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.PRIMARY_900,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position:'absolute',
          bottom:25,
          left:20,
          right: 20,
          height: 50,
          elevation:5,
          borderRadius:10,
          paddingBottom:10,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          shadowColor:COLORS.SHADOW,
          shadowOffset:{
            width:0,
            height: 10,
          },
          shadowOpacity:0.2,
          shadowRadius:3.5,
         

        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Box backgroundColor={color===COLORS.SECONDARY_900? COLORS.PRIMARY_900:COLORS.WHITE} 
              width={50} 
              height={35}
              alignItems='center'
              justifyContent='center'
              paddingTop={1}
              marginBottom={2}
              borderRadius={4}
              >
              <MaterialIcons name="event-available" size={24} color={color} />
           </Box>
            
          ),
        }}
      />
       <Screen
        name="clients"
        component={Clients}
        options={{
          tabBarIcon: ({ color }) => (
            <Box backgroundColor={color===COLORS.SECONDARY_900? COLORS.PRIMARY_900:COLORS.WHITE} 
            width={50} 
            height={35}
            alignItems='center'
            justifyContent='center'
            paddingTop={1}
            marginBottom={2}
            borderRadius={4}
            >
            <MaterialIcons name="group" size={24} color={color} />
          </Box>
          ),
        }}
      />
       <Screen
        name="more"
        component={More}
        options={{
          tabBarIcon: ({ color }) => (
            <Box backgroundColor={color===COLORS.SECONDARY_900? COLORS.PRIMARY_900:COLORS.WHITE} 
            width={50} 
            height={35}
            alignItems='center'
            justifyContent='center'
            paddingTop={1}
            marginBottom={2}
            borderRadius={4}
            >
            <MaterialIcons name="more-horiz" size={24} color={color} />
          </Box>
          ),
        }}
      />
      
      
     
    </Navigator>
  );
}
