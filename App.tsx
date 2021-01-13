/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

declare const global: {HermesInternal: null | {}};

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    name: string;
  };
};

// component
import HomeScreen from './src/screen/Home';
import ProfileScreen from './src/screen/Profile';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Food Delivery'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Food Delivery Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
