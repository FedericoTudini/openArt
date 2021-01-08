import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { StyleSheet,
    View,
    ScrollView, 
    StatusBar, 
    ImageBackground, 
    Dimensions, 
    Text,
    TouchableOpacity
    } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { faMapMarkerAlt, faAngleLeft, faAngleDoubleRight, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

class ArtworkList extends Component {
    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
    }
    list = () => {
        var artworks = [
            {key : '1', artist: "Lucamaleonte", name: "D'Apres Gigi (Gigi Proietti)", latitude: 41.95002262447923, longitude: 12.534419526823307, path: require('../images/gigi.jpg')},
            {key : '2', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '3', artist: "Lucamaleonte", name: "Vecchio a chi? (Francesco Totti)", latitude: 41.88252139793549, longitude: 12.504520351948631, path: require('../images/totti.jpg')},
            {key : '4', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '5', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '6', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
            {key : '7', artist: "JBRock", name: "Wall of Fame", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg')},
        ];
        return artworks.filter(obj => obj.artist === this.props.artist).map(art => {
            return (
                <TouchableOpacity key={art.key} style={styles.box} activeOpacity={0.7} >
                    <ImageBackground style={styles.img} imageStyle={{borderRadius: 25}} source={art.path}/>
                    <View style={styles.overlay}/>
                    <View style={styles.boxBottom}>
                        <View style={{flex:8, justifyContent: 'space-around', paddingBottom: 12, paddingTop: 8}}>
                            <Text numberOfLines={1} style={styles.txtArtwork}>{art.name}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size={25} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    render() {
        return (
            <View style={{height: Dimensions.get('window').height, backgroundColor: '#193A55'}}>
                <StatusBar backgroundColor="#202c3e" barStyle="default" />
                <Navbar left={ faAngleLeft } right={ faMapMarkedAlt }/>
                <LinearGradient
                    style={styles.artistBar}
                    colors={['#008783', '#39bfba']}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}>
                    <Text style={styles.artistProp}>Opere di {this.props.artist}</Text>
                </LinearGradient>
                <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#193A55', paddingBottom: 35}}>
                    {this.list(this.props)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBar: {
        paddingVertical: 5,
        paddingHorizontal: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    artistProp: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlignVertical: 'center',
        color: 'white',
        fontStyle: 'italic'
    },
    box: {
        width: '93%',
        height: 150,
        borderRadius: 25,
        flexDirection: 'column',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        marginVertical: 8,
        elevation: 5
    },
    boxBottom: {
        backgroundColor:'rgba(255,255,255,0.3)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems:'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonCont: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    button: {
        backgroundColor: '#5ee086',
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
    imgContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.35)',
        borderRadius: 25
    },
    txtArtwork: {
        fontSize: 22,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingRight: 10
    },
    txtArtist: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
    },
    txtBtn: {
        color: 'white',
        paddingRight: 8,
        fontSize: 15
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
});

export default function(props) {
    const navigation = useNavigation();
    const route = useRoute();  
    return <ArtworkList {...props} navigation={navigation} route={route} />;
}