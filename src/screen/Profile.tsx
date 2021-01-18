import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const Profile = (props: Props) => {
  const {navigation, route} = props;
  return (
    <View style={styles.wrapper}>
      <Text>{route.params.name}</Text>
      <Button
        title="Back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
