import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashBordSreen from '../Screen/DashBordSreen';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={DashBordSreen}/>
        {/* <Tab.Screen name="File" component={DashBordSreen}/> */}
        <Tab.Screen name="Settings" component={DashBordSreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})