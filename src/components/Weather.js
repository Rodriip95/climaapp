import { StyleSheet, Image, View, Animated, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import TextPoppins from './TextPoppins';
import { buildUrlImage } from '../api';
import { toUpperCaseFirstChar } from '../utils/format';
import RowBetween from './RowBetween';
import RowCenter from './RowCenter';
import fontSize from '../utils/fontSize';
import colors from '../utils/colors';
import TempDailysList from './TempDailysList';
import Icon from 'react-native-vector-icons/Ionicons';


const Weather = ({ tempMyLocation, tempMyLocationDailys }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const elevation = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
      }),
      Animated.timing(elevation, {
        toValue: 0,
        duration: 500,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.containerAnimated,
          {
            opacity: opacity,
            bottom: elevation,
          },
        ]}>
        <RowBetween>
          <View>
            <TextPoppins
              size={48}
              weight={fontSize.semiBold}
              color={colors.white}>
              {tempMyLocation.temp}º
            </TextPoppins>
            <View>
              <TextPoppins
                size={24}
                weight={fontSize.medium}
                color={colors.white}>
                {tempMyLocation.description &&
                  toUpperCaseFirstChar(tempMyLocation.description)}
              </TextPoppins>
              <TextPoppins size={18} color={colors.white}>
                {tempMyLocation.city}<Icon name="location-sharp" size={24} color={colors.white} />
              </TextPoppins>
            </View>
          </View>

          <View style={styles.columnEnd}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: buildUrlImage(tempMyLocation.icon) }}
                style={styles.image}
              />
            </View>
            <View style={styles.rowEnd}>
              <TextPoppins
                size={14}
                weight={fontSize.medium}
                color={colors.white}>
                Max {tempMyLocation.max}º
              </TextPoppins>
              <TextPoppins
                size={14}
                weight={fontSize.medium}
                color={colors.white}>
                Min {tempMyLocation.min}º
              </TextPoppins>
            </View>
          </View>
        </RowBetween>

        <RowCenter>
          <TempDailysList tempMyLocationDailys={tempMyLocationDailys} />
        </RowCenter>
      </Animated.View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteBlue,
    width: Dimensions.get('screen').width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 20,
  },
  columnEnd: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerAnimated: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
  },
  rowEnd: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 5
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    backgroundColor: colors.yellow,
    borderRadius: 300,
  },
});
