import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/2.1.jpg"
import imagen2 from "./../../../image/Info/2.2.jpg"


const Dieta = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    PRESION ARTERIAL
                </Text>
                <Text style={styles.context}>
                    {"\n"}La presión arterial alta hipertensión es una afección frecuente en la que la fuerza que ejerce la sangre contra las paredes de tus arterias con el transcurso del tiempo es lo suficientemente alta como para poder causarte problemas de salud, como una enfermedad cardíaca.{'\n'}

                    La presión arterial está determinada tanto por la cantidad de sangre que el corazón bombea como por el grado de resistencia al flujo de la sangre en las arterias. Cuanta más sangre tu corazón bombee y cuanto más estrechas estén tus arterias, mayor será tu presión arterial. La lectura de la presión arterial se determina en milímetros de mercurio mm Hg.{'\n'}{'\n'}
                    Tiene dos números:{'\n'}
                    •	Valor superior presión sistólica. El primero, o superior, mide la presión en las arterias cuando el corazón late.{'\n'}
                    •	Valor inferior presión diastólica. El segundo, o inferior, mide la presión en las arterias entre los latidos.{'\n'}
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