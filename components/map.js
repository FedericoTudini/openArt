import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {Svg, Image as ImageSvg} from 'react-native-svg';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

class Map extends Component {
    constructor () {
        super();
        this.list = this.list.bind(this);
        this.state = {
            artworks: [
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
            ],
        };
      }
    list () {
        return this.state.artworks.map(artwork => {
            const url = artwork.path
            const image = Image.resolveAssetSource(url)
            const w = image.width;
            const h = image.height;
            return (
                    <Marker 
                    key = {artwork.key} 
                    style = {styles.mark}
                    coordinate = {{latitude : artwork.latitude, longitude: artwork.longitude}}
                    image = {require('../images/location-pin.png')}>
                        <Callout tooltip={true} onPress = {() => this.props.navigation.navigate('Artwork',{name: artwork.name, artist : artwork.artist, path: artwork.path, longitude : artwork.longitude, latitude : artwork.latitude, address: artwork.address, pathArtist : artwork.pathArtist})}>
                            <View>
                                <View style={styles.callV} >
                                    <View style={{flex:2}}>
                                        <Svg >
                                            <ImageSvg
                                                width={'100%'} 
                                                height={'100%'}
                                                href={artwork.path}
                                                style={styles.img}
                                            />
                                        </Svg>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text numberOfLines={2} style={{textAlign: 'center', alignSelf:'center', fontSize: 14, fontWeight:'bold'}}>{artwork.name}</Text>
                                        <Text style={{textAlign: 'center', alignSelf:'center', fontStyle: 'italic'}}>{artwork.artist}</Text>
                                    </View>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
            );
        });
    };
    render () {
        return (
            <MapView
              style = {styles.map}
              customMapStyle = { generatedMapStyle }
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
                  {this.list()}
              </MapView>
          );
    }
}
const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
    boxBottom: {
        backgroundColor:'#ff0000',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 50,
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    call: {
        backgroundColor: '#fff',
        width: 240,
        height: 165,
        marginBottom: 8,
        borderRadius: 20,
        padding: 15
    },
    callH: {
        backgroundColor: '#fff',
        width: 215,
        height: 165,
        marginBottom: 8,
        borderRadius: 20,
        padding: 15
    },
    callV: {
        backgroundColor: '#fff',
        width: 195,
        height: 225,
        borderRadius: 20,
        padding: 9,
        marginBottom: 7
    },
});

const generatedMapStyle = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#202c3e"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            },
            {
                "weight": "1.39"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "0.96"
            },
            {
                "saturation": "9"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": "9"
            },
            {
                "color": "#29446b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#193a55"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
]


export default function(props) {
    const navigation = useNavigation();
    const route = useRoute();  
    return <Map {...props} navigation={navigation} route={route} />;
}