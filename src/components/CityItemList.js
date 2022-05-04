import { StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import React from 'react'
import TextPoppins from './TextPoppins';
import colors from '../utils/colors';
import RowCenter from './RowCenter';
import { toUpperCaseFirstChar } from '../utils/format';
import fontSize from '../utils/fontSize';
import { buildUrlImage } from '../api';
import { useNavigation } from '@react-navigation/native';

const CityItemList = ({ item }) => {
    const navigation = useNavigation()

    const handlerNavigate = () => {
        navigation.navigate('Details', {item})
    }
    return (
        <View style={styles.containerItem}>
            <TouchableOpacity style={styles.item} onPress={handlerNavigate}>
                <View>
                    <TextPoppins size={18} color={colors.white} weight={fontSize.medium}>
                        {item.city}
                    </TextPoppins>
                    <TextPoppins size={14} color={colors.white} weight={fontSize.light}>{item.description &&
                        toUpperCaseFirstChar(item.description)}</TextPoppins>
                </View>
                <RowCenter>
                    <TextPoppins size={22} color={colors.white} weight={fontSize.semiBold}>{item.temp}º</TextPoppins>
                    <Image
                        source={{ uri: buildUrlImage(item.icon) }}
                        style={{ width: 55, height: 55 }}
                    />
                    <TextPoppins size={14} color={colors.white} weight={fontSize.regular}>{item.max}º / {item.min}º</TextPoppins>
                </RowCenter>
            </TouchableOpacity>
        </View>
    );
}

export default CityItemList

const styles = StyleSheet.create({
    containerItem: {
        width: Dimensions.get('screen').width
    },
    item: {
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor: colors.whiteBlue2,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});