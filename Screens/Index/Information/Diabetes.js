import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/7.1.jpg"
import imagen2 from "./../../../image/Info/7.2.jpg"


const Diabetes = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    DIABETES
                </Text>
                <Text style={styles.context}>
                    {"\n"}La diabetes es una enfermedad crónica (de larga duración) que afecta la forma en que el cuerpo convierte los alimentos en energía.{'\n'}
                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    {"\n"}{"\n"}La mayoría de los alimentos que come se convierten en azúcar (también llamada glucosa) que se libera en el torrente sanguíneo. El páncreas produce una hormona llamada insulina, que actúa como una llave que permite que el azúcar en la sangre entre a las células del cuerpo para que estas la usen como energía.
                    {"\n"}{"\n"}Si una persona tiene diabetes, su cuerpo no produce una cantidad suficiente de insulina o no puede usar adecuadamente la insulina que produce. Cuando no hay suficiente insulina o las células dejan de responder a la insulina, queda demasiada azúcar en el torrente sanguíneo y, con el tiempo, esto puede causar problemas de salud graves, como enfermedad del corazón, pérdida de la visión y enfermedad de los riñones.{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen2} />

            </View>
        </ScrollView >
    )
}

export default Diabetes

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