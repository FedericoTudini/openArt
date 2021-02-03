import React from 'react';
import { StyleSheet, View, Pressable, TouchableOpacity } from 'react-native';
import { Image, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

export default function Navbar(props) {
  const navigation = useNavigation();
  if(props.left && props.right)
  {
    return(
      <View style={styles.twoicons}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={props.left} size={40} color={"white"}  onPress={() => navigation.dispatch(popAction)}/>
        </TouchableOpacity>
        <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
        <TouchableOpacity>
          <FontAwesomeIcon icon={props.right} size={0} color={"white"}/>
        </TouchableOpacity>
      </View>
    )
  }
  if(props.left)
  {
    return(
      <View style={styles.leftonly}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={props.left} size={40} color={"white"}  onPress={() => navigation.dispatch(popAction)}/>
        </TouchableOpacity>
        <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
        <FontAwesomeIcon icon={props.left} size={0} color={"white"} style={{opacity: 0}} />
      </View>
    )
  }
  if(props.right)
  {
    return(
      <View style={styles.leftonly}>
        <FontAwesomeIcon icon={props.right} size={0} color={"white"} style={{opacity: 0}}/>
        <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
        <TouchableOpacity>
          <FontAwesomeIcon icon={props.right} size={20} color={"white"} onPress={() => navigation.navigate('Add')} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.navbar}>
        <Image source={require('../images/logoWhite.png')} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: "#202c3e",
    alignItems: 'center',
    justifyContent: 'center'
  },
  twoicons: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: "#202c3e",
    shadowColor: "#222222",
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,

    elevation: 2,
    paddingHorizontal: 10
  },
  leftonly: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#202c3e',
    shadowColor: "#222222",
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.81,

    elevation: 2,
    paddingHorizontal: 15
  },
  logo : {
    height: '60%',
    width: '40%',
    resizeMode:'contain',
    alignSelf: 'center'
  },
});