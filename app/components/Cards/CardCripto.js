import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { borderColor, white } from '../../utils/assets/colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import TextUI from '../Text/TextUI'
import ButtonIcon from '../Buttons/ButtonIcon'
import useNumber from '../../customHooks/useNumber/useNumber'


const CardCripto = ({ data, navigation, showIcon = true }) => {

  const {
    name,
    icon,
    price
  } = data;
  const { dosDecimales } = useNumber();

  return (
    <View style={[styles.container,{borderWidth: showIcon ? 1 : 0}]}>
      <Image
        source={{ uri: icon }}
        style={styles.img}
        resizeMode={'contain'}
      />
      <View style={styles.infoContainer}>
        <TextUI
          text={name}
          styled={'txtTitleCripto'}
        />
        <TextUI
          text={`$ ${dosDecimales(price)} MXN`}
          styled={'txtTitleCripto'}
        />
      </View>
      {showIcon && <ButtonIcon
        nameIcon={"ios-information-circle-outline"}
        style={'iconInformation'}
        onPress={() => {
          navigation.navigate('CriptoInformation', {
            data: data,
          })
        }}
      />}
    </View>
  )
}

export default CardCripto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: white,
    borderColor: borderColor,
    paddingVertical: wp(2),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  img: {
    width: wp(10),
    height: wp(10)
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: wp(5)
  }
})