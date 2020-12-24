import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { StyleSheet,
    View,
    ScrollView, 
    StatusBar, 
    ImageBackground, 
    Dimensions, 
    Text,
    Button
    } from 'react-native';
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
            {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi (Gigi Proietti)", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
            {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? (Francesco Totti)", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
            {key : '4', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '5', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '6', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '7', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
        ];
        return artworks.map(art => {
            return (
                <View key={art.key} style={styles.box}>
                    <ImageBackground style={styles.img} imageStyle={{borderRadius: 25}} source={art.path}>
                    </ImageBackground>
                    <View style={styles.overlay}/>
                    <View style={styles.boxBottom}>
                        <View style={{flex:8, justifyContent: 'flex-end', paddingBottom: 12}}>
                            <Text style={styles.txtArtwork}>{art.name}</Text>
                            <Text style={styles.txtArtist}>{art.artist}</Text>
                        </View>
                        <View style={{position: 'absolute'}}>
                            <Button color='red' style={styles.button} title='Scopri di più'></Button>
                        </View>
                    </View>
                </View>
            )
        });
    }
    render() {
        return (
            <View style={{height: Dimensions.get('window').height, paddingBottom: 40}}>
                <StatusBar backgroundColor="#008000" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#f5f5f5'}}>
                    {this.list()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: '94%',
        height: 200,
        borderRadius: 25,
        flexDirection: 'column',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        marginVertical: 8,
        elevation: 5
    },
    boxBottom: {
        backgroundColor:'white',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        width: '100%',
        height: '35%',
        position: 'absolute',
        bottom: 0,
        paddingLeft: 25,
    },
    imgContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.35)',
        borderRadius: 25
    },
    txtArtwork: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    txtArtist: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
    },
});