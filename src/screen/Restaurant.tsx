import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../App';
import {ICurrentLocation, RestaurantListProp} from './Home';

type RestaurantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Restaurant'
>;

interface Props extends ICurrentLocation, RestaurantListProp {
  navigation: RestaurantScreenNavigationProp;
}

const Restaurant = (props: Props) => {
  const {navigation} = props;
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text>Restaurant</Text>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
