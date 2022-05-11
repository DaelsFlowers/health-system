import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/9.1.jpg"


const Consejos = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    CONSEJOS DE EJERCICIOS(COMO EMPEZAR A PREPARARTE)
                </Text>
                <Text style={styles.context}>
                    {"\n"}La mejor manera de progresar es entrenar todo el cuerpo tres veces por semana con 4-6 ejercicios.{"\n"}{"\n"}
                    Debido a que entrenarás tres veces por semana con pocos ejercicios es importante seleccionar aquellos que te darán más por menos, aquellos que entrenan muchos músculos al mismo tiempo. En este contexto, una lagartija es mejor que un curl de bíceps: la primera entrena el pecho, tríceps, hombro y abdomen, mientras que la segunda entrena, pues, el bíceps.{"\n"}{"\n"}
                    En lugar de dividir los ejercicios por músculos los clasificaremos en 5 grupos:{"\n"}{"\n"}

                    •	Ejercicios de empuje{"\n"}{"\n"}
                    Press banca{"\n"}
                    Lagartija/flexiones{"\n"}
                    Press de hombro{"\n"}

                    {"\n"}{"\n"}•	Ejercicios de tracción{"\n"}{"\n"}
                    Remo{"\n"}
                    Dominadas{"\n"}
                    Pulldown{"\n"}

                    {"\n"}{"\n"}•	Ejercicios de pierna posterior{"\n"}{"\n"}
                    Estos ejercicios trabajan más a los glúteos e isquiotibiales (muslo posterior) que a los cuádriceps.  En general, son aquellos en los que la principal articulación que se mueve es la cadera (el movimiento de rodilla es más limitado).{"\n"}
                    Peso muerto{"\n"}
                    Puente de cadera{"\n"}

                    {"\n"}{"\n"}•	Ejercicios de pierna anterior{"\n"}{"\n"}
                    Sentadilla{"\n"}
                    Desplantes/zancadas{"\n"}

                    {"\n"}{"\n"}•	Ejercicios de abdomen{"\n"}{"\n"}
                    Planchas{"\n"}
                    Rollouts{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen1} />
            </View>
        </ScrollView >
    )
}

export default Consejos

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