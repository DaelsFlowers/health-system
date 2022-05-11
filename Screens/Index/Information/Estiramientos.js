import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/4.1.jpg"
import imagen2 from "./../../../image/Info/4.2.jpg"
import imagen3 from "./../../../image/Info/4.3.jpg"


const Estiraminetos = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    ESTIRAMIENTOS Y PORQUE HACERLOS
                </Text>
                <Text style={styles.context}>
                    {"\n"}Siempre deberíamos estirar antes y después de hacer ejercicio, muchas veces no lo hacemos por falta de tiempo o simplemente por el desconocimiento de sus consecuencias.{"\n"}{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    Los estiramientos mejoran la circulación de la sangre y favorecen que el oxígeno llegue correctamente a los músculos, combate la rigidez en las articulaciones, es recomendable en la recuperación de algunas lesiones e incluso es una buena forma de combatir el estrés, aliviar dolores de espalda o de cabeza y mejorar la calidad del sueño.
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
                <Text style={styles.context}>
                    Estirar es importante ¿por qué?{"\n"}{"\n"}

                    •	Los estiramientos previos al deporte nos permitirán aprovechar el potencial de nuestro cuerpo, el rendimiento deportivo será mayor si el músculo es flexible, evitando lesiones.{"\n"}{"\n"}

                    •	Durante el tiempo que estamos entrenando se generan tensiones por lo que también es importante llevar a cabo una rutina después del ejercicio para relajar los músculos, esto mejorará la circulación y reducirá el dolor muscular.{"\n"}{"\n"}

                    •	Además, mejoraremos la movilidad de nuestro cuerpo en general, aumentaremos nuestra flexibilidad y agilidad.{"\n"}{"\n"}

                    •	Los estiramientos están considerados como ejercicios de baja intensidad, aunque como ya hemos dicho es importante realizarlos de la manera correcta, ya que realizarlos mal también puede llegar a causarnos una lesión, que es precisamente lo que queremos evitar.{"\n"}{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen3} />
            </View>
        </ScrollView >
    )
}

export default Estiraminetos

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