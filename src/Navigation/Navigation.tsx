import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLandingScreen from '../Screen/AppLandingScreen';
import TabNavigation from './TabNavigation';
import VideoScreen from '../Screen/VideoScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="appLandingscreen"
        component={AppLandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dashbordscreen"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
      name='videoscreen'
      component={VideoScreen}
      options={{
        headerShown: false,
      }}

      />
      
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
