import React, { Component } from 'react';
import { StyleSheet,
    Text, 
    Image, 
    View, 
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Dimensions
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native-gesture-handler';
import Navbar from '../components/navbar.js';
import { faAngleLeft, faAngleDoubleRight, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default class Artwork extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#ffffff'}}>
                <StatusBar backgroundColor="#008000" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <ScrollView style={styles.scrollContainer}>
                    <ImageBackground style={styles.img} source={this.props.path}></ImageBackground>
                    <View style={styles.infoContainer}>
                        <View>
                            <Text style={styles.txt}>{this.props.name}</Text>
                            <Text style={styles.txt}>{this.props.artist}</Text>
                        </View>
                        <Text style={styles.txt}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: '100%'
    },
    infoContainer: {
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    txt: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});