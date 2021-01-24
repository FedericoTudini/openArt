import React, {useState} from 'react';
import { StyleSheet, StatusBar, View, Modal, TouchableOpacity, Text } from 'react-native';
import Navbar from '../components/navbar.js';
import Map from '../components/map.js';
import Search from '../components/search.js';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions } from 'react-native';



export default function Home({navigation, route}) {
  const { latitude, longitude } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#202c3e" barStyle="default" />
      <Navbar />
      <Search />
      <Map latitude={latitude} longitude={longitude}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
        <FontAwesomeIcon icon={faPlus} size={35} color={'white'} onPress={() => navigation.navigate('Add')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#5ee0b6',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    top: Dimensions.get('window').height - 120,
    width: 65,
    height: 65,
    borderRadius: 45,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5
},
});


