import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Width } from './DeviceDimensions';

const HoriCardList: React.FC = (props: any) => {
  const { data } = props;


  const handleClickOnImg = (data: any) => {
    // console.log(data);
  };


  return (
    
    <TouchableOpacity
      onPress={() => handleClickOnImg(data)}
      style={styles.mainConatainer}>
      <View style={styles.cardMainConatainer}>
        <Image
          style={styles.mainImg}
          source={{ uri: data?.background_image }}
        />
        <Text style={styles.gameTitleText}>{data?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HoriCardList;

const styles = StyleSheet.create({
  mainConatainer: {
    marginLeft: 5,
    // marginRight: 5,
  },
  gameTitleText: {
    margin: 5,
    position: 'relative',
    fontSize: 25,
    top: 0,
  },
  cardMainConatainer: {
    margin: 0,
    position: 'relative',
  },
  mainImg: {
    height: 350,
    width: Width - 9,
    borderRadius: 10,
  },
});
