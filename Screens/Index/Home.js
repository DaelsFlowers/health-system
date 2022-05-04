import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'


//iconos
import HomeIco from "./../../image/ico/casa.png"
import InfoIco from "./../../image/ico/corazon.png"
import HistoryIco from "./../../image/ico/diagnostico.png"
import ExerciseIco from "./../../image/ico/dumbell.png"
//import MoreIco from "./../../image/ico/mas-informacion.png"
import ExitIco from "./../../image/ico/cerrar-sesion.png"



//imagenes home de ejercicios
import cuerda from "./../../image/Exercise/cuerda.jpg"
import pierna from "./../../image/Exercise/piernaArriba.jpg"



const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#615858" }}>
            <ScrollView style={styles.content}>
                <View style={styles.contenido}>
                    <Text style={styles.titulo}>Home</Text>
                    <Text style={styles.subtitulo}>EJERCICIOS RECOMENDADOS</Text>
                    <View style={styles.home}>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Cuerda')}>
                            <Text style={styles.categoria}>BRAZO</Text>
                            <Image source={cuerda} style={styles.imagenes} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Pierna')}>
                            <Text style={styles.categoria}>PIERNA</Text>
                            <Image source={pierna} style={styles.imagenes} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Image source={HomeIco} style={styles.iconos} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Ejercicios')}>
                    <Image source={ExerciseIco} style={styles.iconos} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Informacion')}>
                    <Image source={InfoIco} style={styles.iconos} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Historial')}>
                    <Image source={HistoryIco} style={styles.iconos} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Image source={ExitIco} style={styles.iconos} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
        marginTop: 30,
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