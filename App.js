import 'react-native-gesture-handler';
import React, { Component, setState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ArtworkList from './screens/artworklist.js';
import Artwork from './screens/artwork.js';
import Home from './screens/home.js';
import Bio from './screens/bio.js';
import Zoom from './screens/imgview.js';
import Add from './screens/add.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
      return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} initialParams={{ modal: false, longitude: 12.477701978310407, latitude: 41.871876903038284 }}/>
                <Stack.Screen name="Artwork" component={Artwork} />
                <Stack.Screen name="ArtworkList" component={ArtworkList} />
                <Stack.Screen name="Zoom" component={Zoom} />
                <Stack.Screen name="Bio" component={Bio} />
                <Stack.Screen name="Add" component={Add} />
            </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

/*


<NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Artwork" component={Artwork} />
        <Stack.Screen name="ArtworkList" component={ArtworkList} />
        <Stack.Screen name="Zoom" component={Zoom} />
        <Stack.Screen name="Bio" component={Bio} />
      </Stack.Navigator>
    </NavigationContainer>

*/