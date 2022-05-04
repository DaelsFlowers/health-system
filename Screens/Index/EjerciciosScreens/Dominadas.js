import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import dominadas from "./../../../image/Exercise/dominadas.jpg"



const Dominadas = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <View style={styles.home}>
                    <Image source={dominadas} style={styles.imagenes} />
                    <Text style={styles.des}>Para hacer dominadas agarra con las
                        dos manos la barra y sube como si tu cuerpo fuese una tabla.
                        Es importante que agarres la barra con comodidad, apoyando en
                        ella los pulgares para contar con un apoyo más amplio y firme.
                    </Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('DominadasAux')}>
                        <Text style={styles.buttonTextStyle} >Empezar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default Dominadas

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