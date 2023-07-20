import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTile}>Aspilsan Enerji</Text>
      {/*
      <Image
        source={{uri: 'asset:/ae-cover.png'}}
        style={{width: 40, height: 40}}
  />*/}
    </View>
  );
};


export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "13%",
    backgroundColor: "midnightblue",
    paddingTop: 45,
    paddingLeft: 87,
  },
  headerTile:{
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  }
})