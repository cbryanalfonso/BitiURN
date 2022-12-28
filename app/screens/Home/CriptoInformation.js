import { StyleSheet, Text, View, SafeAreaView, Image, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, white } from '../../utils/assets/colors'
import TextUI from '../../components/Text/TextUI'
import useNumber from '../../customHooks/useNumber/useNumber'
import ButtonIcon from '../../components/Buttons/ButtonIcon'
import Graficos from '../../components/Graficos/Graficos'

const CriptoInformation = ({ route }) => {
    const data = route?.params?.data

    const { icon, price, twitterUrl, websiteUrl } = data
    const { dosDecimales } = useNumber();
    return (
        <SafeAreaView style={styles.containerHeader}>
            <TextUI
                text={'Detalles de monedas'}
                styled={'txtTitle'}
            />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.containerInfo}>
                        <Image
                            source={{ uri: icon }}
                            style={styles.img}
                            resizeMode={'contain'}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <TextUI
                                text={"Precio"}
                                styled={'txtTitleCripto'}
                            />
                            <TextUI
                                text={`$ ${dosDecimales(price)} MXN`}
                                styled={'txtTitleCripto'}
                            />
                        </View>
                    </View>
                    <Graficos/>
                    <View style={styles.containerSN}>
                        <ButtonIcon
                            nameIcon={'ios-logo-twitter'}
                            color={'#03d6e1'}
                            style='iconSN'
                            onPress={() => Linking.openURL(twitterUrl)}
                        />
                        <ButtonIcon
                            nameIcon={'globe-outline'}
                            color={'#2039df'}
                            style='iconSN'
                            onPress={() => Linking.openURL(websiteUrl)}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CriptoInformation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColorNavigator,
        marginTop: wp(10)

    },
    subContainer: {
        flex: 1,
        backgroundColor: white,
        borderWidth: 1,
        borderColor: borderColor,
        marginHorizontal: wp(5),
        paddingTop: wp(8),
        paddingHorizontal: wp(5)

    },
    containerHeader: {
        flex: 1,
        backgroundColor: backgroundColorNavigator
    },
    informationCripto: {
        flex: 1,

    },
    img: {
        width: wp(15),
        height: wp(15),
    },
    containerInfo: {
        flexDirection: 'row',
        marginTop: wp(5)
    },
    containerSN: {
        marginVertical: wp(5),
        paddingVertical: wp(2),
        flexDirection: 'row',
    }
})