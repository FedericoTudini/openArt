import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, StatusBar,Text, ScrollView, TouchableOpacity } from 'react-native';
import { faAngleLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar.js';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Search({navigation, route}) {
    const { artist } = route.params;
    return (
        <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#ffffff'}}>
            <StatusBar backgroundColor="#202c3e" barStyle="default" />
            <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
            <ScrollView>
                <LinearGradient 
                style={styles.gradient}
                colors={['#193A55', '#202c3e']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}>
                    <View style={{backgroundColor:'white', width: 220, height: 220}}></View>
                    <Text style={{fontSize : 40, color: 'white', marginVertical: 25}}>{artist}</Text>
                    <View>
                        <Text style={{fontSize : 16, color: 'white'}}>Biografia dell'artista:</Text>
                        <Text style={{fontSize : 19, color: 'white'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ArtworkList', {artist: artist})}>
                        <FontAwesomeIcon icon={faPalette} size={25} color={"white"}/>
                        <Text style={{fontSize : 17, color: 'white', paddingLeft: 15}}>Opere dell'artista</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width : '100%', 
        minHeight: Dimensions.get('window').height - 65,
        alignItems: 'center',
        paddingVertical : 40,
        paddingHorizontal: 50
    },
    btn: {
        backgroundColor: '#5ee086',
        height: 50,
        paddingHorizontal: 35,
        marginVertical: 40,
        borderRadius : 25,
        borderColor : 'white',
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
  