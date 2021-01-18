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
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/reducers';
import {Provider, useDispatch} from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    name: string;
  };
  Restaurant: any;
};

// tabs
import Tabs from './src/navigation/Tabs';

// component
import ProfileScreen from './src/screen/Profile';
import RestaurantScreen from './src/screen/Restaurant';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{title: 'Food Delivery'}}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{title: 'Restaurant'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Food Delivery Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
