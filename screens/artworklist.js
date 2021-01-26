import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { StyleSheet,
    View,
    ScrollView, 
    StatusBar, 
    ImageBackground, 
    Dimensions, 
    Text,
    TouchableOpacity
    } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { faMapMarkerAlt, faAngleLeft, faAngleDoubleRight, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default function ArtworkList({navigation, route}) {
    const { name, artist, path } = route.params;
    list = () => {
        var artworks = [
                {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi (Gigi Proietti)", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg'), address: "Via Tonale, 6", pathArtist: require('../images/lucamaleonte.jpg')},
                {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg'), address: "Via dei Magazzini Generali", pathArtist: require('../images/jbrock.jpg')},
                {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? (Francesco Totti)", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg'), address: "Via Sibari, 9", pathArtist: require('../images/lucamaleonte.jpg')},
                {key : '4', artist: "Lucamaleonte", name: "Patrimonio Indigeno", latitude: 41.898307723931254, longitude: 12.51941269920533, path: require('../images/patrimonio.jpg'), address: "Via dei Piceni, 38", pathArtist: require('../images/lucamaleonte.jpg')},
                {key : '5', artist: "Jaz", name: "Il peso della storia", latitude: 41.85586331943168, longitude: 12.497407540639466, path: require('../images/peso.jpg'), address: "Via di Tormarancia, 85", pathArtist: require('../images/jaz.jpg')},
                {key : '6', artist: "Lucamaleonte", name: "Nido di Vespe", latitude: 41.864519759662095, longitude: 12.547793263647074, path: require('../images/vespe.png'), address: "Via del Monte del Grano, 8", pathArtist: require('../images/lucamaleonte.jpg')},
                {key : '7', artist: "Lucamaleonte", name: "Il martirio di Rufina e Seconda", latitude: 41.93211630772763, longitude: 12.47287928387895, path: require('../images/martirio.jpg'), address: "Via Casal del Marmo", pathArtist: require('../images/lucamaleonte.jpg')},
                {key : '8', artist: "Mr Klevra", name: "Santa Maria di Shangai", latitude: 41.85578364639673, longitude: 12.497785004587298, path: require('../images/santa.jpg'), address: "Via di Tor Marancia, 63", pathArtist: require('../images/klevra.jpg')},
                {key : '9', artist: "Lex & Sten", name: "Outdoor 2013", latitude: 41.86464970067803, longitude: 12.485922864833723, path: require('../images/outdoor.png'), address: "Via Fausto Vettor, 48", pathArtist: require('../images/lezsten.jpg')},
                {key : '10', artist: "Lex & Sten", name: "Paesaggio Urbano VIII", latitude: 41.87113795018718, longitude: 12.48550865930858, path: require('../images/urbano.png'), address: "Piazzale 12 Ottobre 1492, 15", pathArtist: require('../images/lezsten.jpg')},
                {key : '11', artist: "Lex & Sten", name: "Murales", latitude: 41.89369880128023, longitude: 12.595449832184487, path: require('../images/murales.png'), address: "Via Prenestina, 932", pathArtist: require('../images/lezsten.jpg')},
        ];
        return artworks.filter(obj => obj.artist === artist).map(art => {
            return (
                <TouchableOpacity key={art.key} style={styles.box} activeOpacity={0.7} onPress={() => navigation.navigate('Artwork', {artist: art.artist, name: art.name, path: art.path, longitude : art.longitude, latitude : art.latitude, address: art.address, pathArtist : art.pathArtist})}>
                    <ImageBackground style={styles.img} imageStyle={{borderRadius: 25}} source={art.path}/>
                    <View style={styles.overlay}/>
                    <View style={styles.boxBottom}>
                        <View style={{flex:8, justifyContent: 'space-around', paddingBottom: 12, paddingTop: 8}}>
                            <Text numberOfLines={1} style={styles.txtArtwork}>{art.name}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.4} >
                            <FontAwesomeIcon icon={faMapMarkerAlt} size={25} color={"white"} onPress={() => navigation.navigate('Home', {longitude: art.longitude, latitude: art.latitude })}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={{height: Dimensions.get('window').height, backgroundColor: '#193A55'}}>
            <StatusBar backgroundColor="#202c3e" barStyle="default" />
            <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
            <LinearGradient
                style={styles.artistBar}
                colors={['#008783', '#39bfba']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}>
                <Text style={styles.artistProp}>Opere di {artist}</Text>
            </LinearGradient>
            <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#193A55', paddingBottom: 35}}>
                {list()}
            </ScrollView>
        </View>
        );
    
}

const styles = StyleSheet.create({
    artistBar: {
        paddingVertical: 5,
        paddingHorizontal: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    artistProp: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlignVertical: 'center',
        color: 'white',
        fontStyle: 'italic'
    },
    box: {
        width: '93%',
        height: 150,
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
        backgroundColor:'rgba(255,255,255,0.3)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems:'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonCont: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    button: {
        backgroundColor: '#5ee086',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 7,
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        elevation: 5
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
        fontSize: 22,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingRight: 10
    },
    txtArtist: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
    },
    txtBtn: {
        color: 'white',
        paddingRight: 8,
        fontSize: 15
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
});
