import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ControlledGifView from 'react-native-controlled-gif';
import gif from "../../../../gif/cuerda.gif"


const CuerdaAux = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <ControlledGifView
                    style={{ width: 200, height: 166, backgroundColor: "yellow" }}
                    url="http://katemobile.ru/tmp/sample3.gif"
                    isPlaying={true}
                    onReady={(width, height) => this.onReady(width, height)}
                    onError={(code, message) => this.onError(code, message)} />
            </View>
        </ScrollView>

    )
}

export default CuerdaAux

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})