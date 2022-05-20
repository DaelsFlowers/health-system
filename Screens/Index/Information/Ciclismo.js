import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

// import * as Mqtt from 'react-native-native-mqtt';

// const client = new Mqtt.Client("wss://mqtt.flespi.io:443")

// client.connect({
//     clientId: "mqtt-board-9a05e0d4",
// }, err => { });

// client.on(Mqtt.Event.Message,(""))

const CiclismoScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    CICLISMO
                </Text>
            </View>
        </ScrollView >

    )
}

export default CiclismoScreen

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    imagenes: {
        width: "100%",
        height: 200,
        resizeMode: "stretch",
        marginBottom: 20,
    },
    titulo: {
        color: "#fff",
        fontSize: 32,
        textAlign: 'center',
        fontWeight: "bold",
    },
    context: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'justify'
    },
    context2: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'left'
    },
})