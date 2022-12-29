import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, focusedColor, white } from '../../utils/assets/colors'
import TextUI from '../../components/Text/TextUI'
import CardCripto from '../../components/Cards/CardCripto'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetCriptos } from '../../business/actions/actionCriptos'
import Loading from '../../components/loaders/Loading'
import { actionGetNews } from '../../business/actions/actionNews'
import useCriptos from '../../customHooks/useCriptos/useCriptos'
export default function HomeCripto({ navigation }) {
    let dataCripto = useSelector((state) => state.reducerCripto.info);
    const { isLoading, handleLoadMore } = useCriptos();
    /**
     * The keyExtractor function takes in an item and an index and returns a string of the index
     * @param item - The item in the data array that is being rendered.
     * @param index - The index of the item in the data array.
     */
    const keyExtractor = (item, index) => index.toString();
    /**
     * It takes an object with an item and index property, and returns a CardCripto component with the
     * data and navigation props
     */
    const renderItem = ({ item, index }) => <CardCripto data={item} navigation={navigation} />


    /**
     * The function returns a loading component if the isLoading state is true, else it returns null
     * @returns A function that returns a component.
     */
    const renderFooter = ({ item }) => {
        return (
            <>
                {isLoading ? (
                    <Loading
                        color={focusedColor}
                        heigh={hp(20)}
                        width={"100%"}
                    />
                ) : null}
            </>
        )
    }

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
                            ListFooterComponent={renderFooter}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={0.5}
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