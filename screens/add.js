import React, { Component, useState } from 'react';
import {StyleSheet, View, Dimensions, StatusBar,TouchableHighlight, Modal, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { faAngleLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar.js';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage, faTimes, faCameraRetro, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Add({navigation, route}) {
    const [isVisible, setVisible] = useState(false);
    return (
        <View style={styles.cont}>
            <StatusBar backgroundColor="#202c3e" barStyle="default" />
            <Navbar left={faAngleLeft} right={faMapMarkedAlt} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FontAwesomeIcon icon={faCheckCircle} color={'green'} size={50}/>
                        <Text style={{color: '#202c3e', fontSize: 20, fontStyle: 'italic', fontWeight:'bold'}}>Grazie!</Text>
                        <View width={150} style={{justifyContent: 'center', alignItems:'center', marginVertical: 8}}>
                            <Text style={{width: '70%', textAlign: 'center', fontSize: 16}}>L'opera è stata segnalata con successo!</Text>
                        </View>
                        <TouchableHighlight style={{...styles.btn, width: 120}} onPress={() => navigation.navigate('Home')}>
                            <Text style={{color: 'white', fontSize: 15}}>HOME</Text>
                        </TouchableHighlight>
                        <TouchableOpacity onPress={() => setVisible(!isVisible)}>
                            <FontAwesomeIcon icon={faTimes} style={{marginTop: 10}} color={'red'} size={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{backgroundColor: '#193A55',  alignItems: 'center', justifyContent: 'space-between',  paddingVertical: 50, flex: 1}}>
                <View>
                    <Text style={styles.txt}>Hai notato che un'opera non è presente sulla nostra App?</Text>
                    <Text style={styles.txt}>Segnalala al nostro Staff!</Text>
                </View>
                <View width={Dimensions.get('window').width} style={{alignItems: 'center'}}>
                    <TextInput style={styles.txtInput} placeholderTextColor={'#cccccc'} placeholder={'Posizione'}></TextInput>
                    <TextInput style={styles.txtInput} marginVertical={10} placeholderTextColor={'#cccccc'} placeholder={'Artista'}></TextInput>
                    <TextInput style={styles.txtInput2} placeholderTextColor={'#cccccc'} placeholder={'Note'}></TextInput>
                </View>
                <View style={styles.contIcons}>
                    <TouchableOpacity style={styles.touch}>
                        <FontAwesomeIcon size={70} color={'white'} icon={faImage}/>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Carica un'immagine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <FontAwesomeIcon size={70} color={'white'} icon={faCameraRetro}/>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Scatta una foto</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: 'white', fontSize: 16}} onPress={() => setVisible(!isVisible)}>INVIA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex:1
    },
    centeredView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
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
        width: 200
    },
    contIcons: {
        width: 'auto',
        marginHorizontal: 15,
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,1)',
        borderStyle: 'dashed',
        borderRadius: 20,
        borderWidth: 8,
        flexDirection: 'row'
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    txt: {
        color: 'white',
        fontSize: 25,
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
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.81,
        elevation: 5,
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
    }
})
  