import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from "./../image/logo.png"

const Login = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.text}>LOGIN</Text>
                <View style={styles.formLogin}>
                    <TextInput
                        placeholder='CORREO'
                        style={styles.inputStyle} />
                    <TextInput
                        placeholder='CONTRASEÑA'
                        style={styles.inputStyle} />
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Index')}>
                        <Text style={styles.buttonTextStyle} >ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.registerTextStyle}
                    onPress={() => navigation.navigate('Register')}>
                    No tienes cuenta? Registrate
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
        height: 50,
        marginTop: 40,
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

export default Login