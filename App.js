import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ArtworkList from './screens/artworklist.js';
import Artwork from './screens/artwork.js';
import Home from './screens/home.js';

export default function App() {
  return(
    <View>
      <Artwork artist='JBRock' name='Wall of Fame' path={require('./images/walloffame.jpg')} />
    </View>
  );
};
