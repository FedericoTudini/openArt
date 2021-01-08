import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import ArtworkList from './screens/artworklist.js';
import Artwork from './screens/artwork.js';
import Home from './screens/home.js';
import Bio from './screens/bio.js';
import Zoom from './screens/imgview.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
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
  }
};
