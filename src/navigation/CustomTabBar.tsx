import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {COLORS} from '../constants';

const CustomTabBar: React.FunctionComponent<BottomTabBarProps> = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View style={styles.tabBar} />
        <BottomTabBar {...props} />
      </View>
    );
  }
  return <BottomTabBar {...props} />;
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 30,
    backgroundColor: COLORS.white,
  },
});

export default CustomTabBar;
