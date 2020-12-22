import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ImageBackground, Alert } from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground  style= { styles.bg } source={require('../images/streetart_def.png')} >
      <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
          <Text style={styles.h}>Scopri l'arte per le strade della tua città</Text>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='e-mail' textContentType='emailAddress' placeholderTextColor='rgba(255,255,255,0.8)'></TextInput>
            <TextInput style={styles.input} placeholder='password' textContentType='password' placeholderTextColor='white'></TextInput>
            <TouchableOpacity  color="#841584" style={styles.btn} onPress={() => Alert.alert('Simple Button pressed')}>
              <Text style={styles.btntext}>accedi</Text>
            </TouchableOpacity>
            <Text style={styles.signup}>Non sei registrato? Registrati!</Text>
          </View>
          
      </ImageBackground>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  bg:{
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'center', 
    alignItems: 'center',
},
  input: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    height: '30%',
    margin: '5%',
    width: '97%',
    borderRadius: '50px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingLeft: '10%',
    marginTop: '0%'
    
  },
  inputGroup: {
    width: '100%',
    height: '45%',
    borderRadius: '30px',
    justifyContent: "center",
    alignItems:'center',
    padding: '4%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,

    elevation: 2,

  },
  btn: {
    height:'20%',
    width: '100%',
    color: 'red',
    alignItems: 'center',
    textAlign: 'center'

  },
  btntext: {
    width: '90%',
    color: 'white',
    backgroundColor:'green',
    color: 'white',
    fontFamily:'Montserrat',
    fontWeight: '800'
  },
  logo: {
      height: '10%',
      width: '70%',
      resizeMode:'contain', 
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.30,
      shadowRadius: 2.81,
  
      elevation: 2,
  },
  h: {
      fontSize: '20px',
      width: '65%',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      letterSpacing: '0.5px'
  },
  signup: {
    fontSize: '18px',
    color: 'white',
    textAlign: 'center',
    margin: '5%',
    marginTop: '0%',
    fontFamily: 'Montserrat',
    fontWeight: '700',
  }
  
  
});
