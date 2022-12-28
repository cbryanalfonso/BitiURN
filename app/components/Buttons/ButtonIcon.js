import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { borderColor } from '../../utils/assets/colors';

const ButtonIcon = ({ nameIcon, sizeIcon = wp(8), color = '#090a0b', onPress, addStyle, style }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={onPress}
            style={[getStyleButton(style), addStyle && addStyle]}
        >
            {/* <Icon name={nameIcon} size={sizeIcon} color={color} /> */}
        </TouchableOpacity>
    )
}

const getStyleButton = (style) => {
    switch (style) {
        case "iconInformation":
            return {
                borderRadius: wp(100) / 2,
                justifyContent: 'center',
                alignItems: 'center',
            }
        case "iconSN":
            return {
                borderRadius: wp(3),
                justifyContent: 'center',
                aliginItems: 'center',
                borderWidth: 1.2,
                borderColor: borderColor,
                width: wp(14),
                height: wp(14),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: wp(2) 
            }

        default:
            break;
    }
}

export default ButtonIcon

const styles = StyleSheet.create({

})