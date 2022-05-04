import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import cuerda from "./../../image/Exercise/cuerda.jpg"
import domindas from "./../../image/Exercise/dominadas.jpg"



const Ejercicios = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text></Text>
                <View style={styles.home}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Brazo')}>
                        <Text style={styles.categoria}>BRAZO</Text>
                        <Image source={cuerda} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Pierna')}>
                        <Text style={styles.categoria}>PIERNA</Text>
                        <Image source={domindas} style={styles.imagenes} />
                    </TouchableOpacity>
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
    titulo: {
        textAlign: 'center',
        fontSize: 55,
        color: "#fff",
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 28,
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 10,
    },
    navbar: {
        backgroundColor: "#615858",
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    iconos: {
        resizeMode: 'stretch',
        width: 50,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 14,
    },
    categoria: {
        textAlign: "center",
        color: "#fff",
        fontSize: 24,
        marginTop: 10,
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
    }
})