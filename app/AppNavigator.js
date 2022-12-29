import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import HomeCripto from './screens/Home/HomeCripto';
import HomeNews from './screens/News/HomeNews';
import CriptoInformation from './screens/Home/CriptoInformation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { borderColor, focusedColor, white } from './utils/assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderTop from './components/Headers/HeaderTop';
import HeaderHome from './components/Headers/HeaderHome';


const AppNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  /**
   * It returns a Tab.Navigator component that has two tabs, one for the HomeCripto screen and one for
   * the HomeNews screen
   */
  const BottomTabs = ({ navigation }) => (
    <Tab.Navigator
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ color, focused }) => mostrarIcono(route, color, focused),
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: focusedColor,
        tabBarInactiveTintColor: "#c0bfc1"
      })}
    >
      {ifTab("Monedas", HomeCripto, navigation)}
      {ifTab("Noticias", HomeNews, navigation)}
    </Tab.Navigator>
  );

  /**
   * It returns a Tab.Screen component with a header that is a HeaderHome component
   * @param name - The name of the tab.
   * @param component - The component to render.
   * @param navigation - This is the navigation prop that is passed to all screen components.
   * @returns A function that returns a Tab.Screen component.
   */
  const ifTab = (name, component, navigation) => {
    return (
      <Tab.Screen name={name} component={component} options={{
        header: () => <HeaderHome navigation={navigation} data={name} />,
      }} />
    );
  };



  /**
   * It's a function that returns a Stack.Navigator component with two screens, the first one is the
   * BottomTabs component and the second one is the CriptoInformation component
   */
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
          header: () => <HeaderTop navigation={navigation} data={route.params.data} />,
          headerTransparent: false,

        })}
      />
    </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}

/**
 * It returns an icon based on the route name
 * @param route - The route object for the tab, which is the route object used when configuring the
 * screen in the navigator.
 * @param color - The color of the icon.
 * @param focused - boolean
 * @returns A function that returns a component.
 */
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