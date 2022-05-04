import { StyleSheet, FlatList, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TextPoppins from './TextPoppins';
import colors from '../utils/colors'
import { buildUrlImage } from '../api';
import RowCenter from './RowCenter';
import { toUpperCaseFirstChar } from '../utils/format';
import fontSize from '../utils/fontSize';
import CityItemList from './CityItemList';

const CitiesList = () => {
  const { cities } = useSelector(state => state.location);

  const renderItem = ({item}) => <CityItemList item={item}/>
  return (
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item.city}
        scrollEnabled
        ListEmptyComponent={<View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginVertical: 20}}><TextPoppins size={28} color={"#ccc"} weight={fontSize.semiBold}>Lista vacia</TextPoppins></View>}
      />
  );
};

export default CitiesList;

