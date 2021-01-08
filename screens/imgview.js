import React from 'react';
import { StyleSheet, View, Pressable, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from 'react-native-image-pan-zoom';


const url = require('../images/gigi.jpg')
const image = Image.resolveAssetSource(url)
const w = image.width;
const h = image.height;
export default function ImgView({route, navigation}) {
    const { path } = route.params;
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#202c3e' barStyle='light-content' />
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topBar} >
                    <FontAwesomeIcon icon={faArrowLeft} size={30} color={"#202c3e"} />
            </TouchableOpacity>
            <ImageZoom style={{bottom: 25}} cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height} imageWidth={w} imageHeight={h}>
                <Image style={styles.img} width={w} height={h} source={path}/>
            </ImageZoom>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    topBar: {
        position: 'absolute',
        top: 25,
        left: 25
    },
    img: {
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
    }
});