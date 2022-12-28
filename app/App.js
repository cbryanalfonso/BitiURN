import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './AppNavigator'
import store from './business/store'

const App = () => {
  return (
   <Provider store={store}>
     <AppNavigator/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({
    
})