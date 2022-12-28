import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import HomeCripto from './screens/Home/HomeCripto';
import HomeNews from './screens/News/HomeNews';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { backgroundColorNavigator, borderColor, focusedColor, white } from './utils/assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CriptoInformation from './screens/Home/CriptoInformation';
import HeaderTop from './components/Headers/HeaderTop';
import HeaderHome from './components/Headers/HeaderHome';


const AppNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabs = ({ navigation }) => (
    <Tab.Navigator
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ color,focused }) => mostrarIcono(route, color, focused),
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: focusedColor,
        tabBarInactiveTintColor: "#c0bfc1"
      })}
    >
      {ifTab("Monedas", HomeCripto, navigation)}
      {ifTab("Noticias", HomeNews, navigation)}
    </Tab.Navigator>
  );

  const ifTab = (name, component, navigation) => {
    return (
      <Tab.Screen name={name} component={component} options={{
        // title: name, headerShown: false,
        header: () => <HeaderHome  navigation={navigation} data={name} />,
      }} />
    );
  };



  const TabNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={({ navigation, route }) => ({
         
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="CriptoInformation"
        component={CriptoInformation}
        options={({ navigation, route }) => ({
          header: ()=> <HeaderTop navigation={navigation} data={route.params.data} />,
          headerTransparent: false,

        })}
      />
    </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}

function mostrarIcono(route, color, focused) {
  switch (route.name) {
    case "Monedas":
      return <Icon name={focused ? "circle" : "circle-thin"} size={27} color={color} />;
    case "Noticias":
      return <Icon name={focused ? "circle" : "circle-thin"} size={27} color={color} />
  }
}

export default AppNavigator

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: white,
    marginHorizontal: wp(5),
    bottom: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: borderColor,
    borderTopWidth: 1,
  }
})