import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const Home = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={styles.wrapper}>
      <Text>Food Delivery Home Page</Text>
      <Button
        onPress={() =>
          navigation.navigate('Profile', {name: 'Highland Coffee'})
        }
        title="Go to restaurant"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
