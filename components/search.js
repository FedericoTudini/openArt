import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Search extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    list = (search) => {
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
        return artworks.filter(obj => obj.artist.toLowerCase().indexOf(search.toLowerCase()) != -1 || obj.name.toLowerCase().includes(search.toLowerCase()) ).map(art => {
            <View key={art.key} style={styles.result} >
                        <Text>{art.name}</Text>
                        <Text>Opera</Text>
            </View>
        })
    }

    render() {
        const { search } = this.state;
        return (
            <View style={styles.cont}>
                <TextInput style={styles.containerSearch} placeholder={"Cerca un'opera, un artista, un indirizzo..."} onChangeText={() => this.list(search)}/>
                <FontAwesomeIcon icon={ faSearch } color={'rgba(255,255,255, 0.7)'} size={25} style={{position: 'absolute', right: 30}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerSearch: {
        opacity: 1,
        borderRadius: 30,
        backgroundColor: '#339989',
        width: '95%',
        height: '80%',
        paddingLeft: 20,
        color: 'white'
    },
    result: {
        width: '95%',
        height: 40,
        backgroundColor: 'white',
        marginVertical: 2
    },
    cont: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#799496',
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
  