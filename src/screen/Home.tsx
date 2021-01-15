import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, useAppDispatch} from '../../App';
import {fetchHome} from '../reducers/home';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {padding} from '../utils/styles';

// mock data
import category from '../mock/category';
import restaurant from '../mock/restaurant';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props {
  navigation: HomeScreenNavigationProp;
  fetchHome: Function;
}

const initialCurrentLocation = {
  streetName: 'Mễ Trì',
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};

type CategoryProp = {
  id: number;
  name: string;
  icon: ImageSourcePropType;
};

const Home = (props: Props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  const [categories, setCategories] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState<CategoryProp>({
    id: 0,
    name: '',
    icon: {},
  });
  const [restaurants, setRestaurants] = useState(restaurant);
  const [currentLocation, setCurrentLocation] = useState({
    ...initialCurrentLocation,
  });

  useEffect(() => {
    dispatch(fetchHome({id: 12, name: 'vuong tran'}));
  }, [dispatch]);

  const onSelectCategory = (item: any) => {
    let restaurantList = restaurant.filter((r) =>
      r.categories.includes(item.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(item);
  };

  const renderHeader = () => {
    return (
      <View style={headerStyles.headerWrapper}>
        <TouchableOpacity style={headerStyles.iconHeaderLeft}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={headerStyles.contentWrapper}>
          <View style={headerStyles.content}>
            <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity style={headerStyles.iconHeaderRight}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMainCategory = () => {
    const renderItem = (item: CategoryProp) => {
      return (
        <TouchableOpacity
          style={mainCategoryStyles({}).categoryItem}
          onPress={() => onSelectCategory(item)}>
          <View
            style={
              mainCategoryStyles({
                selected: {id: selectedCategory.id},
                id: item.id,
              }).imageWrapper
            }>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text
            style={
              mainCategoryStyles({
                selected: {id: selectedCategory.id},
                id: item.id,
              }).itemName
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => renderItem(item)}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  };

  const renderRestaurantList = () => {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2}}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }>
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{...FONTS.body2}}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
          }}>
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3}}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {item.categories.map((categoryId) => {
              return (
                <View style={{flexDirection: 'row'}} key={categoryId}>
                  <Text style={{...FONTS.body3}}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}>
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategory()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});

const headerStyles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    height: 50,
    ...padding(0, SIZES.padding * 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeaderLeft: {
    flexGrow: 1,
    width: 50,
    alignItems: 'flex-start',
  },
  iconHeaderRight: {
    flexGrow: 1,
    width: 50,
    alignItems: 'flex-end',
  },
  contentWrapper: {
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '80%',
    backgroundColor: COLORS.lightGray5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
});

type mainCategoryProps = {
  selected?: {
    id: number | string | null;
  };
  id?: number | string;
};

const mainCategoryStyles = (props: mainCategoryProps) =>
  StyleSheet.create({
    categoryItem: {
      ...padding(
        SIZES.padding,
        SIZES.padding,
        SIZES.padding * 2,
        SIZES.padding,
      ),
      backgroundColor:
        props.selected?.id === props.id ? COLORS.primary : COLORS.white,
      borderRadius: SIZES.radius,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: SIZES.padding,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
      height: 100,
    },
    imageWrapper: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        props.selected?.id === props.id ? COLORS.white : COLORS.lightGray,
    },
    itemName: {
      marginTop: SIZES.padding,
      color: props.selected?.id === props.id ? COLORS.white : COLORS.black,
      ...FONTS.body5,
    },
  });
