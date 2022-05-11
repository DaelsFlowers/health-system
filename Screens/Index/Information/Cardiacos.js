import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/5.1.jpeg"
import imagen2 from "./../../../image/Info/5.2.jpg"
import imagen3 from "./../../../image/Info/5.3.png"
import imagen4 from "./../../../image/Info/5.4.png"


const Cardiacos = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>
                    PROBLEMAS CARDIACOS
                </Text>
                <Text style={styles.context}>
                    {"\n"}La enfermedad cardíaca incluye una gran variedad de enfermedades que afectan el corazón. Las enfermedades cardíacas incluyen lo siguiente:{"\n"}{"\n"}

                    •	Enfermedad de los vasos sanguíneos, como enfermedad de las arterias coronarias{"\n"}
                    •	Problemas en el ritmo cardíaco (arritmias){"\n"}
                    •	Defectos cardíacos de nacimiento (defectos cardíacos congénitos){"\n"}
                    •	Enfermedad de las válvulas cardíacas{"\n"}
                    •	Enfermedad del músculo cardíaco{"\n"}
                    •	Infección del corazón{"\n"}
                    •	Muchas formas de enfermedad cardíaca pueden prevenirse o tratarse con elecciones de un estilo de vida saludable.{"\n"}

                </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    {"\n"}Síntomas de enfermedad cardíaca en los vasos sanguíneos{"\n"}{"\n"}

                    La acumulación de placas de grasa en las arterias o la ateroesclerosis pueden dañar los vasos sanguíneos y el corazón. La acumulación de placa causa un estrechamiento o bloqueo de los vasos sanguíneos que puede provocar un ataque cardíaco, dolor en el pecho (angina de pecho) o accidente cerebrovascular.{"\n"}{"\n"}

                    Las mujeres pueden tener otros signos y síntomas junto con el malestar en el pecho, como falta de aire, náuseas y fatiga extrema.{"\n"}{"\n"}

                    Los signos y síntomas pueden incluir los siguientes:{"\n"}{"\n"}
                </Text>
                <Text style={styles.context2}>
                    •	Dolor en el pecho, opresión del pecho, presión en el pecho y molestia en el pecho (angina de pecho){"\n"}
                    •	Falta de aire{"\n"}
                    •	Dolor, entumecimiento, debilidad y sensación de frío en las piernas o los brazos si los vasos sanguíneos en esas partes del cuerpo se estrechan{"\n"}
                    •	Dolor en el cuello, la mandíbula, la garganta, el área superior del abdomen o la espalda{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
                <Text style={styles.context}>
                    {"\n"}Síntomas de enfermedad cardíaca causados por latidos anormales (arritmias cardíacas){"\n"}{"\n"}

                    Es posible que tu corazón lata demasiado rápido, demasiado lento o de forma irregular. Los signos y síntomas de la arritmia cardíaca pueden incluir los siguientes:{"\n"}
                </Text>
                <Text style={styles.context2}>
                    •	Sensación de aleteo en el pecho{"\n"}
                    •	Latidos cardíacos acelerados (taquicardia){"\n"}
                    •	Latidos cardíacos lentos (bradicardia){"\n"}
                    •	Dolor o molestia en el pecho{"\n"}
                    •	Falta de aire{"\n"}
                    •	Aturdimiento{"\n"}
                    •	Mareos{"\n"}
                    •	Desmayo (síncope) o casi desmayo{"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen3} />
                <Text style={styles.context}>
                    {"\n"}{"\n"}Síntomas de enfermedad cardíaca causados por los defectos cardíacos{"\n"}{"\n"}

                    Los defectos cardíacos graves de nacimiento (defectos cardíacos congénitos) a menudo se observan poco después del nacimiento. Los signos y síntomas del defecto cardíaco en niños pueden incluir los siguientes:{"\n"}
                </Text>
                <Text style={styles.context2}>
                    •	Color de piel gris pálido o azul (cianosis) {"\n"}
                    •	Hinchazón en las piernas, el abdomen o el área alrededor de los ojos {"\n"}
                    •	En un bebé, la falta de aliento durante el amamantamiento, lo que genera poco aumento de peso {"\n"}
                </Text>
                <Image style={styles.imagenes} source={imagen4} />
                <Text style={styles.context}>
                    {"\n"}Los defectos cardíacos congénitos menos graves, a menudo, no se diagnostican hasta más adelante en la infancia o durante la adultez. Los signos y síntomas de los defectos cardíacos congénitos que, por lo general, no ponen en riesgo la vida de inmediato incluyen los siguientes:{"\n"}
                </Text>
                <Text style={styles.context2}>
                    •	Tener dificultad para respirar al poco tiempo durante el ejercicio o la actividad física{"\n"}
                    •	Cansarse fácilmente durante el ejercicio o la actividad física{"\n"}
                    •	Hinchazón de las manos, los tobillos o los pies{"\n"}
                </Text>
                <Text style={styles.context}>
                    {"\n"}Síntomas de enfermedad cardíaca causados por el músculo del corazón afectado por la enfermedad (miocardiopatía){"\n"}{"\n"}

                    En las primeras etapas de la miocardiopatía, es posible que no tengas síntomas. A medida que la enfermedad empeora, los síntomas pueden incluir lo siguiente:
                </Text>
                <Text style={styles.context2}>
                    {"\n"}•	Falta de aliento cuando haces actividad o descansas{"\n"}
                    •	Hinchazón en las piernas, los tobillos y los pies{"\n"}
                    •	Fatiga{"\n"}
                    •	Latidos irregulares que se sienten rápidos, que palpitan fuertemente o como aleteos{"\n"}
                    •	Mareos, aturdimiento y desmayos{"\n"}

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