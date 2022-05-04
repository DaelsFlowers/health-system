import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//imagenes home de ejercicios
import flexion from "./../../../image/Exercise/flexion.jpg"



const Flexion = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <View style={styles.home}>
                    <Image source={flexion} style={styles.imagenes} />
                    <Text style={styles.des}>Para hacer una flexión hay que
                        colocarse boca abajo, con los brazos a la anchura de los
                        hombros, los codos metidos y cerca del torso y el cuerpo
                        de la cabeza a los pies en línea recta. Las manos deben
                        estar debajo de los hombros con los índices apuntando
                        hacia delante y los dedos abiertos. </Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('FlexionAux')}>
                        <Text style={styles.buttonTextStyle} >Empezar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default Flexion

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