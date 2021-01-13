import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Search extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.cont}>
                <TextInput style={styles.containerSearch} placeholder={"Cerca un'opera, un artista, un indirizzo..."}/>
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
  