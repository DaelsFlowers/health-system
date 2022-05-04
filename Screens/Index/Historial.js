import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const Ejercicios = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <View style={styles.data}>
                    <Text style={styles.texto}>Calorias Quemadas:</Text>
                    <Text style={styles.texto}>Tiempo Total:</Text>
                    <Text style={styles.texto}>Ultima Rutina:</Text>
                    <Text style={styles.texto}>Fecha:</Text>
                </View>
                <View style={styles.ultimos}>
                    <Text style={styles.textoul}>ULTIMOS EJERCICIOS REALIZADOS</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default Ejercicios

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    texto: {
        color: "#fff",
        fontSize: 20,
        textAlign: "left",
    },
    textoul: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 30,
        marginTop: 20,
        fontWeight: '900',
    }
})