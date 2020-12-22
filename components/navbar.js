import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
        <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#008000',
    shadowColor: "#222222",
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,

    elevation: 2,
  },
  logo : {
    height: '60%',
    width: '40%',
    resizeMode:'contain'
  },
});