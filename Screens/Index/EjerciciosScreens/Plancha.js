import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import plancha from "./../../../image/Exercise/plancha.jpg"



const Plancha = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <View style={styles.home}>
                    <Image source={plancha} style={styles.imagenes} />
                    <Text style={styles.des}>se encarga de
                        fortalecer todos los músculos de tu cuerpo
                        y es un ejercicio increíble para el core.
                        Apoya los codos y coloca los pies juntos
                        sobre el suelo. Lo ideal es que te relajes
                        para así aguantar más en esa posición </Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('PlanchaAux')}>
                        <Text style={styles.buttonTextStyle} >Empezar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default Plancha

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
    home: {
        borderRadius: 10,
        backgroundColor: "#615858",
        padding: 10,
    },
    des: {
        color: "#fff",
        fontSize: 24,
        textAlign: 'justify'
    },
    button: {
        backgroundColor: '#4F4646',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#4F4646',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        marginTop: 40,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 24,
    },
})