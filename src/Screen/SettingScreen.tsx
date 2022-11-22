import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { i18n } from '../Translate/Index';

const SettingScreen = () => {
  const handleChangelug = (data: any) => {
    // i18n.locale = 'ja';
    console.log(i18n, 'test');
  };
  return (
    <>
      <TouchableOpacity onPress={() => handleChangelug('en')}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangelug('ja')}>
        <Text>Japanish</Text>
      </TouchableOpacity>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
