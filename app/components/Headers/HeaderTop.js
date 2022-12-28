import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextUI from '../Text/TextUI';
import { borderColor, white } from '../../utils/assets/colors';
import ButtonIcon from '../Buttons/ButtonIcon';
const HeaderTop = ({ navigation, data }) => {
   
    const {name} = data;
    
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ButtonIcon
                    nameIcon={"ios-chevron-back-sharp"}
                    style={'iconInformation'}
                    onPress={() => { navigation.goBack() }}
                    addStyle={styles.buttonBack}
                />
                <TextUI
                    text={name}
                    styled={'logoTitle'}
                    addStyles={{ marginVertical: wp(3) }}
                />
            </SafeAreaView>
        </>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: white,
        width: wp(90),
        top: Platform.OS === 'ios' ?wp(20) : wp(5),
        borderWidth: 1,
        borderColor: borderColor,
        alignItems: 'center',
        marginHorizontal: wp(5),
        justifyContent: 'center',
        borderRadius: 3
    },
    buttonBack: {
        position: 'absolute',
        left: wp(4)

    }
})