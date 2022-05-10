import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/2.1.jpg"
import imagen2 from "./../../../image/Info/2.2.jpg"


const Cardiacos = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    PROBLEMAS CARDIACOS
                </Text>
                <Text style={styles.context}>
                    {"\n"}Síntomas de enfermedad cardíaca en los vasos sanguíneos{"\n"}{"\n"}{"\n"}

                    La acumulación de placas de grasa en las arterias o la ateroesclerosis pueden dañar los vasos sanguíneos y el corazón. La acumulación de placa causa un estrechamiento o bloqueo de los vasos sanguíneos que puede provocar un ataque cardíaco, dolor en el pecho (angina de pecho) o accidente cerebrovascular.{"\n"}{"\n"}

                    Las mujeres pueden tener otros signos y síntomas junto con el malestar en el pecho, como falta de aire, náuseas y fatiga extrema.{"\n"}{"\n"}

                    Los signos y síntomas pueden incluir los siguientes:{"\n"}{"\n"}

                    •	Dolor en el pecho, opresión del pecho, presión en el pecho y molestia en el pecho (angina de pecho){"\n"}
                    •	Falta de aire{"\n"}
                    •	Dolor, entumecimiento, debilidad y sensación de frío en las piernas o los brazos si los vasos sanguíneos en esas partes del cuerpo se estrechan{"\n"}
                    •	Dolor en el cuello, la mandíbula, la garganta, el área superior del abdomen o la espalda{"\n"}
                    {'\n'}
                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    {"\n"}Síntomas {"\n"}{"\n"}
                    Algunas personas con presión arterial alta pueden tener dolor de cabeza, dificultad para respirar o sangrado nasal, pero estos signos y síntomas no son específicos y, por lo general, no se presentan hasta que dicho trastorno alcanza una etapa grave o potencialmente fatal.{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
                <Text style={styles.context}>
                    {"\n"}{"\n"}Factores de riesgo{"\n"}{"\n"}
                    •	Edad{"\n"}
                    •	Raza{"\n"}
                    •	Antecedentes Familiares{"\n"}
                    •	Sobrepeso u obesidad{"\n"}
                    •	Falta de actividad física{"\n"}
                    •	Consumo de tabaco{"\n"}
                    •	Alto contenido de sal sodio en tu dieta{"\n"}
                    •	Cantidad insuficiente de potasio en tu dieta{"\n"}
                    •	Consumo excesivo de alcohol{"\n"}
                    •	Estrés{"\n"}
                    •	Ciertas enfermedades crónicas{"\n"}
                </Text>
            </View>
        </ScrollView >
    )
}

export default Cardiacos;

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