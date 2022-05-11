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
                        TABACO Y SUS CONSECUENCIAS
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Presion')}>
                    <Text style={styles.text}>
                        PRESION ARTERIAL
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Sobrepeso')} >
                    <Text style={styles.text}>
                        SOBREPESO
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Estiramientos')} >
                    <Text style={styles.text}>
                        ESTIRAMIENTOS Y PORQUE HACERLOS
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Cardiacos')} >
                    <Text style={styles.text}>
                        PROBLEMAS CARDIACOS
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Dieta')} >
                    <Text style={styles.text}>
                        DIETA
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Diabetes')} >
                    <Text style={styles.text}>
                        DIABETES
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Pulmonales')} >
                    <Text style={styles.text}>
                        PROBLEMAS PULMONARES
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Consejos')} >
                    <Text style={styles.text}>
                        CONSEJOS DE EJERCICIOS(COMO EMPEZAR A PREPARARTE)
                    </Text>
                    <Image source={buttonImg} style={styles.boton}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tarjetas} onPress={() => navigation.navigate('Porque')} >
                    <Text style={styles.text}>
                        PORQUE HACER EJERCICIOS
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