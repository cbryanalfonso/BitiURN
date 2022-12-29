import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, focusedColor, white } from '../../utils/assets/colors'
import TextUI from '../../components/Text/TextUI'
import CardNews from '../../components/Cards/CardNews'
import {  useSelector } from 'react-redux'
import Loading from '../../components/loaders/Loading'

const HomeNews = ({ navigation }) => {
    let dataNews = useSelector((state) => state.reducerNews.news);
    /**
     * The keyExtractor function takes in an item and an index and returns a string of the index
     * @param item - The item in the data array that is being rendered.
     * @param index - The index of the item in the data array.
     */
    const keyExtractor = (item, index) => index.toString();
    /**
     * It takes an object with an item and index property, and returns a CardNews component with the
     * data and navigation props
     */
    const renderItem = ({ item, index }) => <CardNews data={item} navigation={navigation} />
   
    return (
        <SafeAreaView style={styles.container}>
            <TextUI
                text={'Noticias'}
                styled={'txtTitle'}
            />
            <View style={styles.subContainer}>
                <View style={styles.containerFlatlist}>
                    {dataNews.length > 0 ? (
                        <FlatList
                            keyExtractor={keyExtractor}
                            data={dataNews}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingBottom: wp(1) }}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                        />
                    ) : (
                        <Loading
                            color={focusedColor}
                            heigh={hp(80)}
                            width={"100%"}
                        />
                    )}

                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeNews

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
        marginBottom: hp(7)
    },
    containerFlatlist: {
        flex: 5,
        borderTopWidth: 1,
        borderColor: borderColor,
        marginTop: wp(20),
        paddingBottom: wp(6)

    }
})