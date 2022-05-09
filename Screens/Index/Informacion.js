import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import buttonImg from "./../../image/ico/buttonVideo.png"


const Informacion = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>

                {/* <TouchableOpacity style={styles.tarjetasEspecial} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.textEspecial}>
                        CICLISMO
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Tabaco')}>
                    <Text style={styles.text}>
                        Tabaco Y Sus Consecuencias
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Tromboembolismo Pulmonar
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Sindrome de Tako-Tsubo
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Infarto de Miocardio
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Cardiopatia Isquemica
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Fibrilacion Cardiaca
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Muerte Subita
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Valvulopatia
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Cardiopatias Congenitas
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} >
                    <Text style={styles.text}>
                        Enfermedades de Kawasaki
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Informacion

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,

    },
    tarjetas: {
        marginTop: 20,
        width: 350,
        height: 80,
        backgroundColor: "#C4C4C4",
        borderRadius: 30,
        justifyContent: "center",

    },
    tarjetasEspecial: {
        marginTop: 20,
        width: 350,
        height: 90,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        justifyContent: "center",

    },
    text: {
        width: 270,
        fontSize: 20,
        textAlign: "left",
        marginLeft: 10,
    },
    textEspecial: {
        width: 270,
        fontSize: 32,
        textAlign: "center",
        marginLeft: 10,
    },
    boton: {
        width: 70,
        height: 70,
        position: "absolute",
        right: 0,
        marginRight: 10,
    },
})