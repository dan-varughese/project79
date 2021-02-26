import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignupLoginScreen from '.screens/SignupLoginScreen';
import HomeScreen from '.screens/HomeScreen';
import ExchangeScreen from '.screens/ExchangeScreen';


export default function App() {
  return (
    <View style={styles.container}>
     <SignupLoginScreen/>
    </View>
  );
}

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarLabel: 'Exchange'
    }
  }
})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
