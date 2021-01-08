import React, { Component } from 'react';
import { StyleSheet,
    Text, 
    Image, 
    View, 
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ScrollView
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Navbar from '../components/navbar.js';
import { LinearGradient } from 'expo-linear-gradient';
import { faAngleLeft, faBookOpen, faMapMarkedAlt, faMapMarkerAlt, faPalette, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

export default function Artwork({navigation, route}) {
        const { name, artist, path } = route.params;
        return (
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#ffffff'}}>
                <StatusBar backgroundColor="#202c3e" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <ScrollView style={styles.scrollContainer}>
                    <ImageBackground style={styles.img} source={path} >
                        <TouchableOpacity style={{position : 'absolute', top: 20, right: 20}}>
                            <FontAwesomeIcon icon={faExpandAlt} size={25} color={"white"} onPress={() => navigation.navigate('Zoom' , {path: path})}/>
                        </TouchableOpacity>
                    </ImageBackground>
                    <LinearGradient 
                        style={styles.infoContainer}
                        colors={['#193A55', '#202c3e']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={styles.txt}>Titolo: {name}</Text>
                            <Text style={styles.txt}>Artista: {artist}</Text>
                        </View>
                        <Text style={styles.txt2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                        <View style={{marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} >
                            <View>
                                <Text style={styles.txt}>Indirizzo:</Text>
                                <Text style={styles.txt2}>Via Tonale, 6, Roma</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size={25} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} onPress={ () => navigation.navigate('Bio', {artist : artist})}>
                            <View>
                                <Text style={styles.txt}>Leggi la bio dell'artista</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={() => navigation.navigate('Bio', {artist : artist})}>
                                    <FontAwesomeIcon icon={faBookOpen} size={25} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} >
                            <View>
                                <Text style={styles.txt}>Vedi altre opere dell'artista</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                                    <FontAwesomeIcon icon={faPalette} size={25} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>
            </View>
        );
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: '100%'
    },
    infoContainer: {
        paddingHorizontal: 30,
        paddingVertical: 25,
        marginTop: -22,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontStyle:'italic'
    },
    txt2: {
        fontSize: 18,
        color: 'white',
    },
    button: {
        backgroundColor: '#5ee0b6',
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
});
