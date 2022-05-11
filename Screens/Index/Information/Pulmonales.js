import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/8.1.jpg"


const Pulmonales = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    PROBLEMAS PULMONARES
                </Text>
                <Text style={styles.context}>
                    {"\n"}Las enfermedades pulmonares son aquellas que impiden el buen funcionamiento de los pulmones. Estas enfermedades pulmonares pueden afectar a una o más de las siguientes partes:{"\n"}{"\n"}
                    •	La vía aérea a través de la cual el oxígeno y otros gases entran y salen de los pulmones.{"\n"}
                    •	Los tejidos y las estructuras que permiten el aporte eficiente de oxígeno y la eliminación del dióxido de carbono (por ejemplo: los alvéolos, que son unos pequeños sacos de aire que están en el interior de los pulmones).{"\n"}
                    •	Los músculos, los huesos, los nervios del tórax y los pulmones, o las dos finas capas de tejido (pleura) que protegen y amortiguan a los pulmones.{"\n"}
                    •	Los vasos sanguíneos (arterias y venas) que transportan sangre dentro y fuera de los pulmones.{"\n"}

                </Text>
                <Image style={styles.imagenes} source={imagen1} />
            </View>
        </ScrollView >
    )
}

export default Pulmonales

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