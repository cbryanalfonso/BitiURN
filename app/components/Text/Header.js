import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import TextUI from './TextUI';
import { borderColor } from '../../utils/assets/colors';
const Header = () => {
  return (
    <View style={styles.container}>
        <TextUI
            text={'BitiU'}
            styled={'logoTitle'}
        />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingVertical: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: borderColor,
        marginBottom: wp(5)
    }
})