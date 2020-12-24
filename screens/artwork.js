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
import { faAngleLeft, faAngleDoubleRight, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default class Artwork extends Component {
    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
    }
    list = (props) => {
        var artworks = [
            {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi (Gigi Proietti)", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
            {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? (Francesco Totti)", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
            {key : '4', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '5', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '6', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '7', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
        ];
        return artworks.filter(obj => obj.artist === this.props.artist).map(art => {
            return (
                <View key={art.key} style={styles.box}>
                    <ImageBackground style={styles.img} imageStyle={{borderRadius: 25}} source={art.path}>
                    </ImageBackground>
                    <View style={styles.overlay}/>
                    <View style={styles.boxBottom}>
                        <View style={{flex:8, justifyContent: 'space-around', paddingBottom: 12, paddingTop: 8}}>
                            <Text style={styles.txtArtwork}>{art.name}</Text>
                            <Text style={styles.txtArtist}>{art.artist}</Text>
                        </View>
                        <View style={styles.buttonCont}>
                            <View style={styles.button}>
                                <Text style={styles.txtBtn}></Text>
                                <FontAwesomeIcon icon={faAngleDoubleRight} size={20} color={"white"}  />
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={{height: Dimensions.get('window').height}}>
                <StatusBar backgroundColor="#008000" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <View style={styles.artistBar}>
                    <Text style={styles.artistProp}>Opere di {this.props.artist}</Text>
                </View>
                <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#f5f5f5', paddingBottom: 35}}>
                    {this.list(this.props)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBar: {
        height: 40,
        paddingHorizontal: '2.5%',
        justifyContent: 'center'
    },
    artistProp: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlignVertical: 'center'
    },
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
        height: '40%',
        position: 'absolute',
        bottom: 0,
        paddingLeft: 25,
    },
    buttonCont: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    button: {
        height: 30,
        borderRadius: 15,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        fontSize: 20,
        color: 'black',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    txtArtist: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
    },
    txtBtn: {
        color: 'white',
        paddingRight: 8
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