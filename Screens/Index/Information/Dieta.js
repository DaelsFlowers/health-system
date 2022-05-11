import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/6.1.jpg"
import imagen2 from "./../../../image/Info/6.2.jpg"


const Dieta = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    DIETA
                </Text>
                <Text style={styles.context}>
                    {"\n"}El término dieta se refiere al hábito alimenticio de una persona. Existen una gran variedad de dietas, algunas de ellas hacen referencia simplemente a un determinado estilo de vida, como la dieta mediterránea o la dieta vegetariana. Las dietas terapéuticas están diseñadas para personas con determinadas dolencias, como la dieta libre de gluten para la enfermedad celíaca o la dieta baja en sodio para las personas que sufren hipertensión.{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    {"\n"}Popularmente, la dieta se asocia erróneamente a la práctica de restringir la ingesta de comida para obtener sólo los nutrientes y la energía necesarios, y así conseguir o mantener cierto peso corporal.{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
            </View>
        </ScrollView >
    )
}

export default Dieta

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