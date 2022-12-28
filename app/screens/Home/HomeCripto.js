import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { backgroundColorNavigator, borderColor, white } from '../../utils/assets/colors'
import Header from '../../components/Text/Header'
import TextUI from '../../components/Text/TextUI'
import CardCripto from '../../components/Cards/CardCripto'
import { listCripto } from '../../business/api_request'

export default function HomeCripto({navigation}) {
    const keyExtractor = (item, index) => index.toString();
    const renderItem = ({item, index}) => <CardCripto data={item} navigation={navigation} />
    const [data, setData] = useState([])
    useEffect(() => {
        listCripto()
        .then((res)=>{
            setData(res.coins)
            console.log(res.coins)
        })
    }, [])
    
    
    return (
        <SafeAreaView style={styles.container}>
            <TextUI
                text={'Listado de monedas'}
                styled={'txtTitle'}
            />
            <View style={styles.subContainer}>
                <Header/>
                <View style={styles.containerFlatlist}>
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={data}
                        renderItem={renderItem}
                        contentContainerStyle={{paddingBottom: wp(1)}}
                    />
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
        marginBottom: hp(7)
    },
    containerFlatlist:{
        flex: 5,
    }
})