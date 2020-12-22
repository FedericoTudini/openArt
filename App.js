import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Home from './screens/home.js';
import Artwork from './screens/artwork.js';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Artwork"
          component={Artwork} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
