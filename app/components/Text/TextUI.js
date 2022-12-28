import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { txtNameCripto, txtTitleColor, txtTitleLogo } from '../../utils/assets/colors'

const TextUI = ({ text, styled, addStyles }) => {
    return (
        <Text
            style={[getStyleTxt(styled), addStyles ? addStyles : null]}
        >
            {text}
        </Text>
    )
}

const getStyleTxt = (style) => {
    switch (style) {
        case "logoTitle":
            return {
                fontSize: wp(7),
                color: txtTitleLogo,
                fontWeight: '500'
            }
        case "txtTitle":
            return {
                fontSize: wp(3.3),
                color: txtTitleColor,
                paddingVertical: wp(1),
                paddingHorizontal: wp(5)
            }
        case "txtTitleCripto":
            return {
                fontSize: wp(3.3),
                color: txtNameCripto,
                paddingVertical: wp(1),
                paddingHorizontal: wp(5)
            }

        default:
            break;
    }
}

export default TextUI

const styles = StyleSheet.create({

})