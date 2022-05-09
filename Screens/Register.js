import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logo from "./../image/logo.png"

import { db } from '../data/firebase'
import { doc, getDocs, setDoc, snapshotEqual, collection } from 'firebase/firestore'


const Register = ({ navigation }) => {


    const [userDoc, setUserDoc] = useState(null)
    var existe = 0

    const Create = (name, mail, pass) => {
        const myDoc = doc(db, "Users", mail)

        const docData = {
            "name": name,
            "mail": mail,
            "pass": pass,
            "passc": pass
        }
        setDoc(myDoc, docData).then(() => {
        }).catch((error) => {
            alert(error.messange)
        })
    }

    const [state, setState] = useState({
        name: "",
        mail: "",
        pass: "",
        passc: "",
    });


    const handleCahngeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const saveNewUser = () => {


        if (state.name === "" || state.mail === "" || state.pass === "") {
            alert("Favor de Llenar Los Campos")
        } else {
            if (state.pass !== state.passc) {
                alert("Las Contraseñas No Coiciden")
            } else {
                const myDocs = doc(db, "Users", state.mail)
                getDocs(myDocs).then((snapshot) => {

                    if (snapshot.exists) {
                        alert("Usuario Ya Registrdo")
                    } else {
                        Create(state.name, state.mail, state.pass)
                        alert("Creado Con Exito")
                        navigation.navigate('Index')
                    }
                }).catch((error) => {
                    alert(error.messange)
                })
            }
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.text}>REGISTRATE</Text>
                <View style={styles.formLogin}>
                    <TextInput
                        placeholder='NOMBRE'
                        style={styles.inputStyle}
                        onChangeText={(value) => handleCahngeText("name", value)} />
                    <TextInput
                        placeholder='CORREO'
                        style={styles.inputStyle}
                        onChangeText={(value) => handleCahngeText("mail", value)} />
                    <TextInput
                        placeholder='CONTRASEÑA'
                        style={styles.inputStyle}
                        onChangeText={(value) => handleCahngeText("pass", value)} />
                    <TextInput
                        placeholder='CONTRASEÑA'
                        style={styles.inputStyle}
                        onChangeText={(value) => handleCahngeText("passc", value)} />
                    <TouchableOpacity style={styles.button} onPress={saveNewUser} >
                        <Text style={styles.buttonTextStyle} >ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.registerTextStyle}
                    //onPress={Create}>
                    onPress={() => navigation.navigate('Login')}>
                    Ya Tienes Una Cuenta? Log In
                </Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3A3131",
        width: "100%",
        height: "100%"
    },
    content: {
        margin: 30,
    },
    logo: {
        width: "100%",
        height: 150,
        resizeMode: 'stretch',
        marginTop: 20,
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
        marginTop: 30,
    },
    inputStyle: {
        height: 40,
        marginTop: 30,
        color: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#615858',
        backgroundColor: "#615858"
    },
    text: {
        color: "#fff",
        fontSize: 45,
        margin: "auto",
        textAlign: 'center',
        fontWeight: 'normal',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#4F4646',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#4F4646',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        marginTop: 40,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 24,
    },

});

export default Register