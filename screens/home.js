import React, {useState} from 'react';
import { StyleSheet, StatusBar, View, Modal, TouchableHighlight, Text } from 'react-native';
import Navbar from '../components/navbar.js';
import Map from '../components/map.js';
import Search from '../components/search.js';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



export default function Home({navigation, route}) {
  const { latitude, longitude } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#202c3e" barStyle="default" />
      <Navbar right={ faPlus }/>
      <Search />
      <Map latitude={latitude} longitude={longitude}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
});


