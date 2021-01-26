import React from 'react';
import { StyleSheet, View, Pressable, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from 'react-native-image-pan-zoom';
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

export default function ImgView({route, navigation}) {
    const { path } = route.params;
    const url = path
    const image = Image.resolveAssetSource(url)
    const w = image.width;
    const h = image.height;
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#202c3e' barStyle='light-content' />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageZoom style={{bottom: 25}} cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height} imageWidth={w} imageHeight={h}>
                <Image style={styles.img} width={w} height={h} source={path}/>
            </ImageZoom>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topBar} >
                    <FontAwesomeIcon icon={faArrowLeft} size={30} color={"#202c3e"} onPress={() => navigation.dispatch(popAction)}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(240,240,240, 1)',
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
    img: {
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
    }
});