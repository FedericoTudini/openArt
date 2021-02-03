import React, { useState } from 'react';
import { StyleSheet,
    Text, 
    Image, 
    View, 
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ScrollView,
    Modal
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Navbar from '../components/navbar.js';
import { LinearGradient } from 'expo-linear-gradient';
import { faAngleLeft, faBookOpen, faMapMarkedAlt, faMapMarkerAlt, faPalette, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from 'react-native-image-pan-zoom';
import { StackActions } from '@react-navigation/native';

export default function Artwork({navigation, route}) {
        const { name, artist, path, latitude, longitude, address, pathArtist } = route.params;
        const url = path
        const image = Image.resolveAssetSource(url)
        const w = image.width;
        const h = image.height;
        const [isVisible, setVisible] = useState(false);
        return (
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#ffffff'}}>
                <StatusBar backgroundColor="#202c3e" barStyle="default" />
                <Navbar left={ faAngleLeft } />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isVisible}>
                    <View style={styles.centeredView}>
                        
                            <View style={styles.container}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <ImageZoom style={styles.img}  cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height} imageWidth={w} imageHeight={h}>
                                        <Image  width={w} height={h} source={path}/>
                                    </ImageZoom>
                                </View>
                                <TouchableOpacity onPress={() => setVisible(!isVisible)} style={styles.topBar} >
                                            <FontAwesomeIcon icon={faTimes} size={35} color={"red"} onPress={() => setVisible(!isVisible)}/>
                                </TouchableOpacity>
                            </View>
                        
                    </View>
                </Modal>
                <ScrollView style={styles.scrollContainer}>
                    <ImageBackground style={styles.img} source={path} >
                        <TouchableOpacity style={{position : 'absolute', top: 20, right: 20}} onPress={() => setVisible(!isVisible)}>
                            <View style={{borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.2)', width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}} onPress={() => setVisible(!isVisible)}>
                                <FontAwesomeIcon icon={faExpandAlt}  size={20} color={"#f5f5f5"} onPress={() => setVisible(!isVisible)}/>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                    <LinearGradient 
                        style={styles.infoContainer}
                        colors={['#193A55', '#202c3e']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={styles.txt}>{name}</Text>
                            <Text style={styles.txt5} onPress={() => navigation.navigate('Bio', {artist : artist, pathArtist: pathArtist})}>{artist}</Text>
                        </View>
                        <Text style={styles.txt2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        <TouchableOpacity style={{marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('Home', {longitude: longitude, latitude: latitude })}>
                            <View>
                                <Text style={styles.txt3}>{address}</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={() => navigation.navigate('Home', {longitude: longitude, latitude: latitude })}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size={25} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} onPress={ () => navigation.navigate('Bio', {artist : artist, pathArtist: pathArtist})}>
                            <View>
                                <Text style={styles.txt}>Pagina dell'artista</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={() => navigation.navigate('Bio', {artist : artist, pathArtist: pathArtist})}>
                                    <FontAwesomeIcon icon={faBookOpen} size={25} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('ArtworkList', {artist: artist})}>
                            <View>
                                <Text style={styles.txt} >Altre opere dell'artista</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={() => navigation.navigate('ArtworkList', {artist: artist})}>
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
    centeredView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalView: {
        backgroundColor: "#202c3e",
        borderRadius: 20,
        padding: 5,
        width: '80%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
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
    txt5: {
        fontSize: 19,
        color: 'white',
        fontStyle:'italic'
    },
    txt2: {
        fontSize: 16,
        color: 'white',
    },
    txt3: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
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
    zoom: {
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        elevation: 5
    },
    container: {
        backgroundColor: 'rgba(0,0,0, 0.8)',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBar: {
        position: 'absolute',
        top: 25,
        left: 25,
    },
    imgZ: {
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
    }
});
