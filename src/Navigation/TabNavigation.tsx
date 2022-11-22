import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBordSreen from '../Screen/DashBordSreen';
import { i18n } from '../Translate/Index';
import SettingScreen from '../Screen/SettingScreen';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={i18n.t('homeScreenName')}
        options={{
          headerShown: false,
        }}
        component={DashBordSreen}
      />
      {/* <Tab.Screen name="File" component={DashBordSreen}/> */}
      <Tab.Screen
        name={i18n.t('settingScreenName')}
        component={SettingScreen}
        options={{ headerShown: false }}
        
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
