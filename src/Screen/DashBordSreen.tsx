import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

interface File {
  ctime: any;
  isDirectory: Function;
  isFile: Function;
  mtime: Date;
  name: String;
  path: String;
  size: Number;
}
const DashBordSreen = (props: any) => {
  const handleVideoFile = (file: any) => {
    props.navigation.navigate('videoscreen', { file: file });
  };
  return (
    <ScrollView>
      <View>
        {props?.videoFile?.assets.map((file: any, index: number) => {
          return (
            <TouchableOpacity
              style={styles.container}
              key={index}
              onPress={() => handleVideoFile(file)}>
              <Text>{file?.filename}</Text>
              <Text></Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    audioFile: state.FileAudioListData,
    videoFile: state.FileVideoListData,
  };
};

export default connect(mapStatetoProps, null)(DashBordSreen);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    margin: 5,
    backgroundColor: '#babac0',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
});
