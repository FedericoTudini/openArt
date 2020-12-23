import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {StyleSheet, View, Image, ScrollView, StatusBar} from 'react-native';
import Navbar from '../components/navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default class Artwork extends Component {
    constructor() {
        super();
        this.list = this.list.bind(this);
    }
    list = () => {
        var artworks = [
            {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
            {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? - Francesco Totti", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
            {key : '4', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '5', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '6', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '7', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
        ];
        return artworks.map(art => {
            return (
                <View key={art.key} style={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={art.path} style={styles.img}/>
                    </View>
                    <View style={styles.boxBottom}></View>
                </View>
            )
        });
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#008000" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <ScrollView style={styles.container}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        {this.list()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#f5f5f5'
    },
    box: {
        width: '90%',
        height: 200,
        borderRadius: 25,
        flexDirection: 'column',
        backgroundColor: 'white',
        shadowColor: "#000000",
        flexDirection: 'column',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        marginVertical: 10,
        elevation: 5
    },
    boxBottom: {
        backgroundColor:'red',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: '100%',
        height: '30%',
        position: 'absolute',
        bottom: 0
    },
    imgContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: '100%',
        height: '70%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
});