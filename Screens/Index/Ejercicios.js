import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import cuerda from "./../../image/Exercise/cuerda.jpg"
import domindas from "./../../image/Exercise/dominadas.jpg"
import flexion from "./../../image/Exercise/flexion.jpg"
import fullroll from "./../../image/Exercise/fullroll.jpg"
import jumping from "./../../image/Exercise/jumping.jpg"
import pierna from "./../../image/Exercise/piernaArriba.jpg"
import plancha from "./../../image/Exercise/plancha.jpg"
import sentadilla from "./../../image/Exercise/sentadilla.jpg"



const Ejercicios = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text></Text>
                <View style={styles.home}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Cuerda')}>
                        <Text style={styles.categoria}>CUERDA</Text>
                        <Image source={cuerda} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('dominadas')}>
                        <Text style={styles.categoria}>DOMINADAS</Text>
                        <Image source={domindas} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('flexion')}>
                        <Text style={styles.categoria}>FLEXION</Text>
                        <Image source={flexion} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('fullroll')}>
                        <Text style={styles.categoria}>FULLROLL</Text>
                        <Image source={fullroll} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('jumping')}>
                        <Text style={styles.categoria}>JUMPING</Text>
                        <Image source={jumping} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('pierna')}>
                        <Text style={styles.categoria}>PIERNA</Text>
                        <Image source={pierna} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('plancha')}>
                        <Text style={styles.categoria}>PLANCHA</Text>
                        <Image source={plancha} style={styles.imagenes} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('sentadilla')}>
                        <Text style={styles.categoria}>SENTADILLAS</Text>
                        <Image source={sentadilla} style={styles.imagenes} />
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