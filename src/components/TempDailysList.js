import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import TextPoppins from './TextPoppins';
import {buildUrlImage} from '../api';
import fontSize from '../utils/fontSize';
import colors from '../utils/colors';

const TempDailysList = ({tempMyLocationDailys}) => {
  return (
    <View style={styles.containerList}>
      {tempMyLocationDailys.map(item => (
        <View style={styles.itemDay}>
          <TextPoppins size={18} weight={fontSize.light} color={colors.white}>{item.date}</TextPoppins>
          <Image
            source={{uri: buildUrlImage(item.icon)}}
            style={{width: 55, height: 55}}
          />
          <TextPoppins size={16} weight={fontSize.regular} color={colors.white}>{item.max}º</TextPoppins>
          <TextPoppins size={14} weight={fontSize.regular} color={colors.white}>{item.min}º</TextPoppins>
        </View>
      ))}
    </View>
  );
};

export default TempDailysList;

const styles = StyleSheet.create({
    containerList:{
        flexDirection: 'row',
        marginTop: 20
    },
    itemDay: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 5
    }
});
