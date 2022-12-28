import { StyleSheet, Text, View, SafeAreaView, Image, Linking, Platform } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, focusedColor, white } from '../../utils/assets/colors'
import TextUI from '../../components/Text/TextUI'
import useNumber from '../../customHooks/useNumber/useNumber'
import ButtonIcon from '../../components/Buttons/ButtonIcon'
import Graficos from '../../components/Graficos/Graficos'
import { getHistorico } from '../../business/api_request'
import Loading from '../../components/loaders/Loading'
import CardCripto from '../../components/Cards/CardCripto'

const CriptoInformation = ({ route }) => {
    const data = route?.params?.data
    const { icon, price, twitterUrl, websiteUrl, id } = data;
    const { dosDecimales } = useNumber();
    const [datas, setDatas] = useState([])
    const dataGraph = [];
    useLayoutEffect(() => {
        getHistorico(id)
            .then((res) => {
                res.map((i) => {
                    dataGraph.push(i[1])
                })
                setDatas(dataGraph)
            })
    }, []);
    return (
        <SafeAreaView style={styles.containerHeader}>
            <TextUI
                text={'Detalles de monedas'}
                styled={'txtTitle'}
            />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.containerInfo}>
                        <CardCripto
                            data={data}
                            showIcon={false}
                        />
                    </View>
                    <View style={styles.graph}>
                        {datas.length > 0 ? <Graficos dataGraph={datas} /> :
                            <Loading
                                color={focusedColor}
                                heigh={hp(15)}
                                width={"100%"}
                            />
                        }
                    </View>

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
        paddingHorizontal: wp(5),
        marginBottom: Platform.OS === 'android' && wp(4) 

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
        marginTop: wp(2)
    },
    containerSN: {
        marginVertical: wp(4),
        paddingVertical: wp(2),
        flexDirection: 'row',
    },
    graph: {
        marginVertical: wp(4)
    }
})