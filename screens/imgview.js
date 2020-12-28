import React from 'react';
import { StyleSheet, View, Pressable, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from 'react-native-image-pan-zoom';


const url = require('../images/gigi.jpg')
const image = Image.resolveAssetSource(url)
const w = image.width;
const h = image.height;
export default function ImgView(props) {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#202c3e' barStyle='light-content' />
        
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity style={styles.topBar} activeOpacity={0.5}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} color={"black"}/>
            </TouchableOpacity>
            <View>
                <ImageZoom style={{bottom: 25}} cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height} imageWidth={w} imageHeight={h}>
                    <Image style={styles.img} width={w} height={h} source={require('../images/gigi.jpg')}/>
                </ImageZoom>
            </View>
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