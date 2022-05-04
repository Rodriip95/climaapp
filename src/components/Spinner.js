import { StyleSheet, Dimensions, View, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const Spinner = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={colors.white}/>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center'
    }
})