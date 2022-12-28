import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Loading = ({ size = "large", width, heigh, color,addStyles }) => {
    return (
        <View
            style={[styles.loaderContainer,{height: heigh, width: width}, addStyles && addStyles]}
        >
            <ActivityIndicator
                size={size}
                color={color}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        aliginItems: 'center',
    }
});

export default Loading
