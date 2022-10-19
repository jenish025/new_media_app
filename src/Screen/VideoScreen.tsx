import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import { Width } from '../Componets/DeviceDimensions';

const VideoScreen = (props: any) => {
  const { route } = props;
  const { params } = route;
  const { file } = params;
  const [status, setStatus] = React.useState({});
  // const video = React.useRef(null);

  console.log(file, 'ads');
  return (
    <View style={styles.container}>
      <Video
      style={styles.video}
        useNativeControls={true}
        source={{
          uri: file?.uri
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: Width,
    height: 300,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
