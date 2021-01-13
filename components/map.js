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
                {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi (Gigi Proietti)", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
                {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
                {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? (Francesco Totti)", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
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
                        <Callout tooltip={true} onPress = {() => this.props.navigation.navigate('Artwork',{name: artwork.name, artist : artwork.artist, path: artwork.path, longitude : artwork.longitude, latitude : artwork.latitude})}>
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