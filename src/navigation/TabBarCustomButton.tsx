import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

import {COLORS} from '../constants';

const TabBarCustomButtonProps: React.FunctionComponent<BottomTabBarButtonProps> = (
  props,
) => {
  const {accessibilityState, children, onPress} = props;
  if (accessibilityState?.selected) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <View style={styles.line} />
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.touchButton} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={styles.defaultButton}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  line: {flex: 1, backgroundColor: COLORS.white},
  touchButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  defaultButton: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.white,
  },
});

export default TabBarCustomButtonProps;
