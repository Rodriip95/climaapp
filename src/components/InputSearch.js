import { StyleSheet, TextInput, View, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

const InputSearch = ({ city, setCity, handlerSearch }) => {
    return (
        <View style={styles.containerInput}>
            <TextInput
                placeholder="Buscar ciudad..."
                value={city}
                onChangeText={value => setCity(value)}
            />
            <TouchableHighlight onPress={handlerSearch}>
                <Icon name="search" size={24} color={colors.black} />
            </TouchableHighlight>
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({
    containerInput: {
        borderWidth: 1,
        borderColor: colors.greyBlack,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10
    },
})