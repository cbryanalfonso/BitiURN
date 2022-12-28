import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { getHistorico } from '../../business/api_request'

const Graficos = ({ dataGraph }) => {
    
    
    return (
            <LineChart
                style={{ height: hp(15), backgroundColor: 'black' }}
                data={dataGraph}
                svg={{ stroke: '#906239', strokeWidth: 2 }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
    )
}

export default Graficos

