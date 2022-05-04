import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import imagen1 from "./../../../image/Info/1.jpg"
import imagen2 from "./../../../image/Info/2.jpg"


const Tabaco = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>TABACO Y SUS CONSECUENCIAS</Text>
                <Text style={styles.context}>Según la Organización Mundial de la Salud (OMS), el tabaco es la primera causa evitable de enfermedad, invalidez y muerte prematura en el mundo. En Europa, el tabaquismo provoca cada año 1,2 millones de muertes. Está directamente relacionado con la aparición de 29 enfermedades (de las cuales 10 son diferentes tipos de cáncer) y es la principal causa de buena parte de muertes por cáncer de pulmón y de más del 50% de las enfermedades cardiovasculares.  </Text>
                <Image style={styles.imagenes} source={imagen1} />
                <Text style={styles.context}>
                    Entre las enfermedades relacionadas con el tabaco destacan las siguientes:{'\n'}
                    •	Bronquitis crónica.{'\n'}
                    •	Enfisema pulmonar.{'\n'}
                    •	Cáncer de pulmón.{'\n'}
                    •	Hipertensión arterial.{'\n'}
                    •	Enfermedad coronaria (angina o infarto de miocardio).{'\n'}
                    •	Accidentes cerebrovasculares (trombosis, hemorragias o embolias).{'\n'}
                    •	Úlcera gastrointestinal.{'\n'}
                    •	Gastritis crónica.{'\n'}
                    •	Cáncer de laringe.{'\n'}
                    •	Cáncer bucofaríngeo.{'\n'}
                    •	Cáncer renal o de vías urinarias.{'\n'}
                    •	Impotencia sexual en el varón.{'\n'}{'\n'}
                    <Text style={styles.context}>Riesgos adicionales en las mujeres:{'\n'}{'\n'}
                        •	La probabilidad de padecer un infarto se multiplica por 10 en las mujeres que fuman y utilizan anticonceptivos orales.{'\n'}
                        •	Entre las mujeres fumadoras, la menopausia se adelanta una media de entre 2 y 3 años con respecto a las mujeres que nunca han fumado.{'\n'}
                        •	Aumenta el riesgo de sufrir osteoporosis.
                    </Text>
                </Text>
                <Image style={styles.imagenes} source={imagen2} />
            </View>
        </ScrollView>

    )
}

export default Tabaco

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
})