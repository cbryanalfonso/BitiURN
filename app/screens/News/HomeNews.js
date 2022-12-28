import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, white } from '../../utils/assets/colors'

const HomeNews = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Listado de criptos</Text>
            <View style={styles.subContainer}>
            </View>
        </SafeAreaView>
    )
}

export default HomeNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColorNavigator
    },
    subContainer: {
        flex: 1,
        backgroundColor: white,
        borderWidth: 1,
        borderColor: borderColor,
        marginHorizontal: wp(5),
        marginBottom: hp(3)
    }
})