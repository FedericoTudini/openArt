import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navbar from '../components/navbar.js';
import Map from '../components/map.js';
import Search from '../components/search.js';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008000" barStyle="default" />
      <Navbar />
      <Search />
      <Map />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
});
