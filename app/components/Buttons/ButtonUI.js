import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { borderColor, txtTitleLogo, white } from '../../utils/assets/colors'

const ButtonUI = ({ style, addButtonStyle, addTxtStyle, txt, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[getButtonStyle(style), addButtonStyle && addButtonStyle]}
        >
            <Text
                style={[getTxtStyle(style), addTxtStyle && addTxtStyle]}
            >{txt}</Text>
        </TouchableOpacity>
    )
}

const getButtonStyle = (style) => {
    switch (style) {
        case "buttonNav":
            return {
                width: wp(20),
                borderRadius: wp(3),
                justifyContent: 'center',
                aliginItems: 'center',
                borderWidth: 1.2,
                borderColor: borderColor,
                backgroundColor: txtTitleLogo,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: wp(1)
            }

        default:
            break;
    }
}

const getTxtStyle = (style) => {
    switch (style) {
        case "buttonNav":
            return {
                color: white,
            }

        default:
            break;
    }
}

export default ButtonUI

const styles = StyleSheet.create({})