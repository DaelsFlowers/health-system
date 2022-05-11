import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const Porque = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    PORQUE HACER EJERCICIOS
                </Text>
                <Text style={styles.context}>
                    {"\n"}El ejercicio físico es bueno para todas las partes del cuerpo, incluida la mente. El ejercicio mejora la salud del cerebro y el aprendizaje. Puede ayudar a las personas a dormir mejor. Cuando haces ejercicio, tu cuerpo produce sustancias químicas que te ayudan a sentirte bien. El ejercicio reduce las posibilidades de sufrir de depresión y disminuye los sentimientos de ansiedad.{"\n"}
                    {"\n"}El ejercicio físico ayuda a las personas a mantener un peso saludable y reducir el riesgo de algunas enfermedades. Hacer ejercicio regularmente puede ayudar a prevenir el aumento de peso, la diabetes tipo 2, las enfermedades cardíacas y la presión arterial alta.{"\n"}
                    {"\n"}El ejercicio ayuda a envejecer bien. Quizás no te parezca importante ahora, pero tu cuerpo te lo agradecerá más adelante. Hacer ejercicio de forma regular mejora la calidad de vida (la capacidad de disfrutar de las cosas) a medida que envejeces.{"\n"}
                </Text>
            </View>
        </ScrollView >
    )
}

export default Porque

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