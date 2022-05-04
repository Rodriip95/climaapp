import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/ContainerScreen';
import Weather from '../../components/Weather';
import { tempForLocationDailys } from '../../api';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';


const DetailsScreen = (props) => {
  const [tempDailys, setTempDailys] = useState([])
  const { item } = props.route.params;

  const navigate = useNavigation()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      const res = await tempForLocationDailys(item.coord.lat, item.coord.lon)
      setTempDailys(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerScreen>
      <TouchableOpacity style={styles.header} onPress={() => navigate.goBack()}>
        <Icon name="chevron-back-outline" size={40} color={colors.white} />
      </TouchableOpacity>
      <Weather tempMyLocation={item} tempMyLocationDailys={tempDailys} />
    </ContainerScreen>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.whiteBlue,
    paddingHorizontal: 5,
    paddingTop: 10,
  }
})