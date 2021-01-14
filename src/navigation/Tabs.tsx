import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarCustomButton from './TabBarCustomButton';
import CustomTabBar from './CustomTabBar';

//screen
import Home from '../screen/Home';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

interface TabsProps {}

const Tabs: React.FunctionComponent<TabsProps> = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={styles({focused}).imageIconTab}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

type StyleProp = {
  focused?: boolean;
};

const styles = (props: StyleProp) =>
  StyleSheet.create({
    imageIconTab: {
      width: 25,
      height: 25,
      tintColor: props.focused ? COLORS.primary : COLORS.secondary,
    },
  });

export default Tabs;
