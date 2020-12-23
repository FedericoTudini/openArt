import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import Navbar from '../components/navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default class Artwork extends Component {
    constructor() {
        super();
        this.list = this.list.bind(this);
    }
    list = () => {
        var data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        return data.map(num => {
            return (
                <View key={num} style={styles.box}></View>
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
        height: '100%',
        backgroundColor: '#f5f5f5'
    },
    box: {
        width: '90%',
        height: 200,
        flexDirection: 'column',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        marginVertical: 10,
        elevation: 5

    }
});