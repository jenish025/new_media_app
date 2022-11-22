import { StyleSheet, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Height, Width } from '../Componets/DeviceDimensions';
import { connect } from 'react-redux';
import {
  FileAudioListData,
  FileVideoListData,
} from '../Redux/Action/AllAction';
import * as MediaLibrary from 'expo-media-library';
import { i18n } from '../Translate/Index';

const AppLandingScreen = (props: any) => {
  const permissionAlertBox = () => {
    Alert.alert(
      'Permission Required',
      'This app need media acesses permission!',
      [
        {
          text: 'I am redy',
          onPress: () => getMediaPermission(),
        },
        {
          text: 'cancle',
          onPress: () => permissionAlertBox(),
        },
      ]
    );
  };

  const getMediaFiles = async () => {
    let videoMedia = await MediaLibrary.getAssetsAsync({
      mediaType: 'video',
      first: 500,
    });

    // console.log(videoMedia)

    props.videoFileList(videoMedia);

    let audioMedia = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: 500,
    });

    props.audioFileList(audioMedia);

    // let test:any = await MediaLibrary.getAlbumsAsync({
    //   includeSmartAlbums:true
    // })
    // // let test1 = await MediaLibrary.getAssetInfoAsync(test);

    // console.log(test, 'vidseo');
  };

  const getMediaPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();

    if (permission.granted) {
      getMediaFiles();
      setTimeout(() => {
        props.navigation.replace('dashbordscreen');
      }, 2000);
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === 'denied') {
        // add alert
        permissionAlertBox();
      }
      if (status === 'granted') {
        getMediaFiles();
        setTimeout(() => {
          props.navigation.replace('dashbordscreen');
        }, 2000);
      }
      if (status === 'granted' && !canAskAgain) {
        //error
      }
    }
  };

  useEffect(() => {
    // readFile();
    getMediaPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{i18n.t('appName')}</Text>
    </SafeAreaView>
  );
};
const mapDispatchtoProps = (dispatch: any) => {
  return {
    videoFileList: (video: any) => dispatch(FileVideoListData(video)),
    audioFileList: (audio: any) => dispatch(FileAudioListData(audio)),
  };
};

export default connect(null, mapDispatchtoProps)(AppLandingScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: Height,
    width: Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
