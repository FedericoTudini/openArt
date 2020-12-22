import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Navbar from '../components/navbar.js';

export default class Artwork extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <View>
                <Navbar />
                <View>
                    <Image></Image>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
  