import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Search from './search.js';

class Map extends Component {
    constructor () {
        super();
        this.list = this.list.bind(this);
        this.state = {
            artworks: [
                {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
                {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
                {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? - Francesco Totti", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
            ],
        };
      }
    list () {
        return this.state.artworks.map(artwork => {
            return (
                    <Marker 
                    key = {artwork.key} 
                    style = {styles.mark}
                    coordinate = {{latitude : artwork.latitude, longitude: artwork.longitude}}
                    image = {require('../images/location-pin.png')}>
                        <Callout tooltip={true}>
                            <View>
                                <View style={styles.call}>
                                    <Image source={artwork.path} />
                                    <Text>{artwork.name}</Text>
                                    <Text>{artwork.artist}</Text>
                                </View>
                                <View style={styles.arrowBorder} />
                                <View style={styles.arrow} />
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
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: 41.90174492369989,
                longitude: 12.515154653554408,
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
    call: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
        height: 120
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
      },
});

export default Map;