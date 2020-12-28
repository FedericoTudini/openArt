import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ArtworkList from './screens/artworklist.js';
import Artwork from './screens/artwork.js';
import Home from './screens/home.js';
import Zoom from './screens/imgview.js';

export default function App() {
  return(
    <View>
      <Zoom artist='JBRock'/>
    </View>
  );
};
