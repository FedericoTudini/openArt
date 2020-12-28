import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

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
            <SearchBar 
                placeholder = "Cerca un'opera, un artista, un indirizzo..."
                placeholderTextColor= "white"
                onChangeText={this.updateSearch}
                lightTheme={true}
                inputContainerStyle={styles.containerSearch}
                containerStyle={styles.cont}
                value={search}
            />
        );
    }
}

const styles = StyleSheet.create({
    containerSearch: {
        opacity: 1,
        borderRadius: 30,
        backgroundColor: '#339989'
    },
    cont: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#799496'
    }
})
  