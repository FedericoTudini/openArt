import React, {useState, Component } from 'react';
import { StyleSheet, StatusBar, View, TextInput, Modal, TouchableOpacity, TouchableHighlight, Text, ScrollView } from 'react-native';
import Navbar from '../components/navbar.js';
import Map from '../components/map.js';
import Search from '../components/search.js';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { faPlus, faStreetView, faSearch, faCrosshairs, faTimes, faImage, faCameraRetro, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const artworks = [
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
  {key : '12', artist: "Lex & Sten", name: "Lex & Sten", latitude: 41.89369880128023, longitude: 12.595449832184487, path: require('../images/murales.png'), address: "Via Prenestina, 932", pathArtist: require('../images/lezsten.jpg')},
  {key : '13', artist: "Mr Klevra", name: "Mr Klevra", latitude: 41.85578364639673, longitude: 12.497785004587298, path: require('../images/santa.jpg'), address: "Via di Tor Marancia, 63", pathArtist: require('../images/klevra.jpg')},
  {key : '14', artist: "Lucamaleonte", name: "Lucamaleonte", latitude: 41.93211630772763, longitude: 12.47287928387895, path: require('../images/martirio.jpg'), address: "Via Casal del Marmo", pathArtist: require('../images/lucamaleonte.jpg')},
  {key : '15', artist: "Jaz", name: "Jaz", latitude: 41.85586331943168, longitude: 12.497407540639466, path: require('../images/peso.jpg'), address: "Via di Tormarancia, 85", pathArtist: require('../images/jaz.jpg')},
  {key : '16', artist: "JBRock", name: "JBRock", latitude: 41.871876903038284, longitude: 12.477701978310407, path: require('../images/walloffame.jpg'), address: "Via dei Magazzini Generali", pathArtist: require('../images/jbrock.jpg')},
  
];

class Home extends Component {
  constructor(props){
    super(props);
    
    navigation = this.props.navigation;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isVisible: false,
      position: 'La tua posizione',
      name: '',
      artist: '',
      toApprove: []
    }
  }
  

  handleSubmit () {
    this.setState({isVisible: !this.state.isVisible});
    var temp = this.state.toApprove;
    temp.push({key: Math.random(), name: this.state.name, artist: this.state.artist});
    this.setState({ toApprove : temp });
  }

  render () {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#202c3e" barStyle="default" />
      <Navbar />
      <View>
        <SearchableDropdown
          //On text change listner on the searchable input
          onTextChange={text => console.log(text)}
          onItemSelect={(item) => item.name === item.artist ? navigation.navigate('Bio',{artist : item.artist, pathArtist: item.pathArtist}) : navigation.navigate('Artwork', {name: item.name, artist : item.artist, path: item.path, longitude : item.longitude, latitude : item.latitude, address: item.address, pathArtist : item.pathArtist})}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5, backgroundColor: '#799496', justifyContent:'center' }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            backgroundColor: '#339989',
            color:'white',
            borderRadius: 15
          }}
          itemStyle={{
            //single dropdown item style
            paddingLeft: 15,
            padding: 10,
            marginTop: 2,
            backgroundColor: '#339989',
            borderRadius: 20
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: 'white',
            fontSize: 16
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            backgroundColor: '#799496',
            maxHeight: 120,
          }}
          items={artworks}
          //mapping of item array
          placeholder="Cerca un'opera, un artista, un indirizzo..."
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isVisible}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', paddingRight: 5}}>
                <FontAwesomeIcon icon={faTimes}  color={'red'} size={30} onPress={() => this.setState({isVisible: !this.state.isVisible})}/>
                </View>
                <View style={{width: '97%'}}>
                  <Text style={styles.txt}>Segnala al nostro staff un'opera non presente sulla mappa!</Text>
                </View>
                <View  style={{width: '97%', alignItems: 'center', marginVertical: 10}}>
                    <View style={styles.positionCont}>
                      <TextInput value={this.state.position} style={styles.pos} placeholderTextColor={'#cccccc'} placeholder={'Posizione'} onFocus={() => this.setState({position : ''})} onChangeText={(position) => this.setState({position: position})}/>
                      <TouchableOpacity style={styles.btn2}>
                        <FontAwesomeIcon size={26} color={'white'} icon={faStreetView} onPress={() => this.setState({position : 'La tua posizione'})}/>
                      </TouchableOpacity>
                    </View>
                    <TextInput style={styles.txtInput} placeholderTextColor={'#cccccc'} placeholder={'Artista'} onChangeText={(artist) => this.setState({artist: artist})}></TextInput>
                    <TextInput style={styles.txtInput} placeholderTextColor={'#cccccc'} placeholder={'Nome opera'} onChangeText={(name) => this.setState({name: name})}></TextInput>
                    <TextInput style={styles.txtInput2} placeholderTextColor={'#cccccc'} placeholder={'Note'}></TextInput>
                </View>
                <View style={styles.contIcons}>
                    <TouchableOpacity style={styles.touch}>
                        <FontAwesomeIcon size={50} color={'white'} icon={faImage}/>
                        <Text style={{color:'white', fontWeight: 'bold'}}>CARICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <FontAwesomeIcon size={45} color={'white'} icon={faCameraRetro}/>
                        <Text style={{color:'white', fontWeight: 'bold'}}>SCATTA</Text>
                    </TouchableOpacity>
                </View>
                <View onPress={() => handleSubmit()}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit()}>
                        <Text style={{color: 'white', fontSize: 16}} onPress={() => this.handleSubmit()}>INVIA</Text>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
      </Modal>
      <Map latitude={this.props.route.params.latitude} longitude={this.props.route.params.longitude} data={artworks} toApprove={this.state.toApprove}/>
      <TouchableOpacity style={styles.button} onPress={() => this.setState({isVisible: !this.state.isVisible})} >
        <FontAwesomeIcon icon={faPlus} size={35} color={'white'}  onPress={() => this.setState({isVisible: !this.state.isVisible})}/>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  btn: {
    backgroundColor: '#40458a',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5,
    borderRadius: 15,
    width: 200,
    marginVertical: 10
  },
  btn2: {
    backgroundColor: '#40458a',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5,
    borderRadius: 30,
  },
  centeredView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.3)',
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
  button: {
    backgroundColor: '#5ee0b6',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 25,
    top: Dimensions.get('window').height - 110,
    width: 60,
    height: 60,
    borderRadius: 45,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5
  },
  containerSearch: {
    opacity: 1,
    borderRadius: 30,
    backgroundColor: '#339989',
    width: '95%',
    height: '80%',
    paddingLeft: 20,
    color: 'white'
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  result: {
    width: '95%',
    height: 120,
    backgroundColor: 'black',
  },
  contIcons: {
    marginHorizontal: 15,
    alignItems: 'center',
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 20,
    borderWidth: 8,
    flexDirection: 'row'
  },
  cont: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#799496',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  txt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: '3.5%'
  },
  txtInput: {
    backgroundColor: '#01BAEF',
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: '93%',
    borderRadius : 15,
    marginVertical: 2,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5,
  },
  pos: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5,
    backgroundColor: '#01BAEF',
    borderRadius : 15,
    color: 'white',
    width: '80%'
  },
  positionCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    marginVertical: 2
  },
  txtInput2: {
    backgroundColor: '#01BAEF',
    color: 'white',
    height: 100,
    textAlignVertical: 'top',
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: '93%',
    borderRadius : 15,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,
    elevation: 5,
    marginVertical: 2
  }
});

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();  
  return <Home  navigation={navigation} route={route} />;
}

