import { FlatList, StyleSheet, Platform, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-ui-lib';
import { LocalData } from '../LocalData/localData';
import HoriCardList from '../Componets/HoriCardList';
import {  } from 'react-native-safe-area-context';
import { Height } from '../Componets/DeviceDimensions';

// import { TDLib } from 'tdl-tdlib-addon';
// import Client from 'tdl';

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
  // const [gamesList, setGameList] = useState();
  // const handleVideoFile = (file: any) => {
  //   props.navigation.navigate('videoscreen', { file: file });
  // };

  // console.log(LocalData.results);

  //   const getGameList = async () => {
  //     try {
  //      const response = await fetch('https://api.rawg.io/api/games?key=e6a6c0049d4b42928ec3e1b86c89904a');
  //      const json = await response.json();
  //      setGameList(json);
  //      console.log(json)
  //    } catch (error) {
  //      console.error(error);
  //    } finally {
  //     //  setLoading(false);
  //    }
  //  }

  useEffect(() => {
    // getGameList();
  }, []);

  return (
    // <ScrollView>
    //   {/* <LoaderScreen color={Colors.blue30} message="Loading..." overlay /> */}

    //   {props?.videoFile?.assets.map((file: any, index: number) => {
    //     return (
    //       <TouchableOpacity
    //         style={styles.container}
    //         key={index}
    //         onPress={() => handleVideoFile(file)}>
    //         <Text style={styles.fileText}>{file?.filename}</Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </ScrollView>
    <SafeAreaView>
      <FlatList
        style={styles.cardListContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={LocalData.results}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <HoriCardList
            data={item}
            // onTap={onTapFood}
            // addCartItem={props.addCartItem}
          />
        )}
      />
    </SafeAreaView>
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
  // container: {
  //   flexDirection: 'row',
  //   margin: 5,
  //   backgroundColor: '#babac0',
   
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   padding: 8,
  // },
  cardListContainer: {
    backgroundColor: '#babac0',
    height: Height,
  },
  fileText: {
    fontSize: 18,
  },
});
