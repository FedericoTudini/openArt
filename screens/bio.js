import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, StatusBar,Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { faAngleLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar.js';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Bio({navigation, route}) {
    const { artist, pathArtist } = route.params;
    return (
        <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#ffffff'}}>
            <StatusBar backgroundColor="#202c3e" barStyle="default" />
            <Navbar left={ faAngleLeft } />
            <ScrollView>
                <LinearGradient 
                style={styles.gradient}
                colors={['#193A55', '#202c3e']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}>
                    <View style={styles.imgCont}>
                        <Image style={styles.img}  source={pathArtist} />
                    </View>
                    <LinearGradient 
                        style={{marginVertical: 20, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center'}}
                        colors={['#20BF55', '#01BAEF']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}>
                            <Text style={{fontSize : 40, color: 'white', marginVertical: 15, fontWeight: 'bold'}}>{artist}</Text>
                    </LinearGradient>
                    <View>
                        <Text style={{fontSize : 16, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ArtworkList', {artist: artist})}>
                        <FontAwesomeIcon icon={faPalette} size={25} color={"white"}/>
                        <Text style={{fontSize : 17, color: 'white', paddingLeft: 15}}>OPERE DELL'ARTISTA</Text>
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
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    imgCont: {
        backgroundColor:'white', 
        width: 270, 
        height: 270, 
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 1,
        height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2.81,
        elevation: 5
    }
})
  