import { Image, Linking, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { borderColor, focusedColor } from '../../utils/assets/colors';
import TextUI from '../Text/TextUI';
import ButtonUI from '../Buttons/ButtonUI';
import Loading from '../loaders/Loading';


const CardNews = ({ data, navigation }) => {
    const { imgURL, title, shareURL } = data;
    const [loadingImg, setLoadingImg] = useState(true)

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgURL }}
                style={styles.img}
                resizeMode={'cover'}
                onLoadStart={() => {
                    setLoadingImg(true)
                }}
                onLoadEnd={() => setLoadingImg(false)}
            />
          {loadingImg &&  <View style={styles.loadingImg}>
                <Loading
                    color={focusedColor}
                    heigh={hp(20)}
                    width={"100%"}
                />
            </View>}
            <View style={styles.containerBody}>
                <TextUI
                    text={title}
                    styled={'txtTitleCripto'}
                    addStyles={{ width: wp(50), textAlign: 'left' }}
                />
                <ButtonUI
                    style={'buttonNav'}
                    txt={'Ver la noticia'}
                    onPress={() => Linking.openURL(shareURL)}
                />
            </View>
        </View>
    )
}

export default CardNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: wp(2),
        marginHorizontal: wp(5),
        borderWidth: 1,
        borderColor: borderColor
    },
    img: {
        width: "100%",
        height: hp(20),
        borderBottomWidth: 1,
        borderColor: borderColor,
    },
    containerBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: wp(1)
    },
    loadingImg: {
        width: "100%",
        height: hp(19),
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute'
    }
})