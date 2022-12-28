import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, focusedColor, white } from '../../utils/assets/colors'
import TextUI from '../../components/Text/TextUI'
import CardCripto from '../../components/Cards/CardCripto'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetCriptos } from '../../business/actions/actionCriptos'
import Loading from '../../components/loaders/Loading'
export default function HomeCripto({ navigation }) {
    let dataCripto = useSelector((state) => state.reducerCripto.info);
    const keyExtractor = (item, index) => index.toString();
    const renderItem = ({ item, index }) => <CardCripto data={item} navigation={navigation} />
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(actionGetCriptos())
    }, [dispatch])


    return (
        <SafeAreaView style={styles.container}>
            <TextUI
                text={'Listado de monedas'}
                styled={'txtTitle'}
            />
            <View style={styles.subContainer}>
                <View style={styles.containerFlatlist}>
                    {dataCripto.length > 0 ? (
                        <FlatList
                            keyExtractor={keyExtractor}
                            data={dataCripto}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingBottom: wp(1) }}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                        />
                    ) : <Loading
                        color={focusedColor}
                        heigh={hp(80)}
                        width={"100%"}
                    />
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

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
        marginBottom: hp(7),
    },
    containerFlatlist: {
        flex: 5,
        borderTopWidth: 1,
        borderColor: borderColor,
        marginTop: wp(20)

    }
})