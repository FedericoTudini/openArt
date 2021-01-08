import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ArtworkList from './screens/artworklist.js';
import Artwork from './screens/artwork.js';
import Home from './screens/home.js';
import Bio from './screens/bio.js';
import Zoom from './screens/imgview.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Artwork" component={Artwork} />
        <Stack.Screen name="ArtworkList" component={ArtworkList} />
        <Stack.Screen name="Zoom" component={Zoom} />
        <Stack.Screen name="Bio" component={Bio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
