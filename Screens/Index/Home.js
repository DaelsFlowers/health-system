import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { BackHandler } from 'react-native';
import { useEffect } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNetInfo } from '@react-native-community/netinfo'


//iconos
import HomeIco from "./../../image/ico/casa.png"
import InfoIco from "./../../image/ico/corazon.png"
import HistoryIco from "./../../image/ico/diagnostico.png"
import ExerciseIco from "./../../image/ico/dumbell.png"
//import MoreIco from "./../../image/ico/mas-informacion.png"
import ExitIco from "./../../image/ico/cerrar-sesion.png"



//imagenes home de ejercicios
import cuerda from "./../../image/Exercise/cuerda.jpg"
import pierna from "./../../image/Exercise/piernaArriba.jpg"
import { render } from 'react-dom';

import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const Home = ({ navigation }) => {


    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='AllData'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS AllData', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS AllData(id INTEGER PRIMARY KEY AUTOINCREMENT,  name VARCHAR(50), timer VARCHAR(50), date INT(20))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    var count = 1

    const Countl = () => {
        if (count >= 3) {
            alert("SISTEMA CREADO POR DANIEL FLORES RIVAS\nGITHUB: DaelsFlowers")
            count = 0
        }
        count += 1
    }

    const netInfo = useNetInfo()
    if (netInfo.isConnected) {
        return (
            <View style={{ flex: 1, backgroundColor: "#615858" }}>
                <ScrollView style={styles.content}>
                    <View style={styles.contenido}>
                        <Text style={styles.titulo}>Home</Text>
                        <Text style={styles.subtitulo}>EJERCICIOS RECOMENDADOS</Text>
                        <View style={styles.home}>
                            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Cuerda')}>
                                <Text style={styles.categoria}>BRAZO</Text>
                                <Image source={cuerda} style={styles.imagenes} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Pierna')}>
                                <Text style={styles.categoria}>PIERNA</Text>
                                <Image source={pierna} style={styles.imagenes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={Countl}>
                        <Image source={HomeIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Ejercicios')}>
                        <Image source={ExerciseIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Informacion')}>
                        <Image source={InfoIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Historial')}>
                        <Image source={HistoryIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Image source={ExitIco} style={styles.iconos} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, backgroundColor: "#615858" }}>
                <AwesomeAlert
                    show={true}
                    title="Error Internet"
                    message="No se encuentra conexion a internet, los videos no cargaran"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                />

                <ScrollView style={styles.content}>
                    <View style={styles.contenido}>
                        <Text style={styles.titulo}>Home</Text>
                        <Text style={styles.subtitulo}>EJERCICIOS RECOMENDADOS</Text>
                        <View style={styles.home}>
                            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Cuerda')}>
                                <Text style={styles.categoria}>BRAZO</Text>
                                <Image source={cuerda} style={styles.imagenes} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Pierna')}>
                                <Text style={styles.categoria}>PIERNA</Text>
                                <Image source={pierna} style={styles.imagenes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.navbar}>
                    <TouchableOpacity>
                        <Image source={HomeIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Ejercicios')}>
                        <Image source={ExerciseIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Informacion')}>
                        <Image source={InfoIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Historial')}>
                        <Image source={HistoryIco} style={styles.iconos} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={BackHandler.exitApp}>
                        <Image source={ExitIco} style={styles.iconos} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default Home

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
        marginTop: 30,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 55,
        color: "#fff",
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 28,
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 10,
    },
    navbar: {
        backgroundColor: "#615858",
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    iconos: {
        resizeMode: 'stretch',
        width: 50,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 14,
    },
    categoria: {
        textAlign: "center",
        color: "#fff",
        fontSize: 24,
        marginTop: 10,
    },
    imagenes: {
        width: "100%",
        height: 200,
        resizeMode: "stretch",
        marginBottom: 20,
    },
    home: {
        borderRadius: 10,
        backgroundColor: "#615858",
        padding: 10,
    }
})