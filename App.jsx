import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './components/Title';
import Local from './components/Local';
import Devices from './components/Devices';
import SendMessages from './components/SendMessages';
import Data from './components/Data';


const App = () => {
  return (
      <View style={styles.container}>
        <Header />
        <HomeScreen />
        <Local />
        <Devices />
        <SendMessages />
        <Data />
        <StatusBar style='auto' />
        
      </View>
      
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

})

export default App;