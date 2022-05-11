import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/3.1.jpg"
import imagen2 from "./../../../image/Info/3.2.jpg"


const Sobrepeso = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    SOBREPESO
                </Text>
                <Text style={styles.context}>
                    {"\n"}Las investigaciones han demostrado que a medida que aumenta el peso hasta alcanzar los niveles de sobrepeso y obesidad*, también aumentan los riesgos de las siguientes afecciones:

                    {"\n"}{"\n"} •	Enfermedad coronaria{"\n"}
                    •	Diabetes tipo 2{"\n"}
                    •	Cáncer (de endometrio, de mama y de colon){"\n"}
                    •	Hipertensión (presión arterial alta){"\n"}
                    •	Dislipidemia (por ejemplo, niveles altos de colesterol total o de triglicéridos){"\n"}
                    •	Accidente cerebrovascular{"\n"}
                    •	Enfermedad del hígado y de la vesícula{"\n"}
                    •	Apnea del sueño y problemas respiratorios{"\n"}
                    •	Artrosis (la degeneración del cartílago y el hueso subyacente de una articulación){"\n"}
                    •	Problemas ginecológicos (menstruación anómala, infertilidad){"\n"}

                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    {"\n"}Tres factores se pueden considerar para determinar si la grasa corporal de una persona la pone en mayor riesgo de presentar enfermedades relacionadas con la obesidad:{"\n"}{"\n"}

                    •	El índice de masa corporal (IMC){"\n"}
                    •	La medida de la cintura{"\n"}
                    •	Otros factores de riesgo que la persona tenga (un factor de riesgo es cualquier elemento que incremente sus probabilidades de padecer una enfermedad).{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
                <Text style={styles.context}>
                    {"\n"}Indice de masa corporal{"\n"}{"\n"}
                    Los expertos a menudo recurren al IMC para determinar si una persona tiene sobrepeso. El IMC calcula el nivel de grasa corporal usando la estatura y el peso.{"\n"}{"\n"}
                    Empezando en 25.0, cuanto más alto es su IMC, mayor es su riesgo de presentar problemas de salud relacionados con la obesidad.{"\n"}{"\n"}

                    •	Sobrepeso (no obeso), si el IMC es de 25.0 a 29.9{"\n"}
                    •	Obesidad clase 1 (de bajo riesgo), si el IMC es de 30 a 34.9{"\n"}
                    •	Obesidad clase 2 (riesgo moderado), si el IMC es de 35 a 39.9{"\n"}
                    •	Obesidad clase 3 (de alto riesgo), si el IMC es igual o mayor a 40{"\n"}
                </Text>

            </View>
        </ScrollView >

    )
}

export default Sobrepeso

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