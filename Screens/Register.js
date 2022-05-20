import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import logo from "./../image/logo.png"
import { DatabaseConnection } from './database/database-connection'
const db = DatabaseConnection.getConnection()



const Register = ({ navigation }) => {

    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let register_user = () => {
        console.log(userName, userContact, userAddress);

        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO table_user (user_name, user_mail, user_password) VALUES (?,?,?)',
                [userName, userContact, userAddress],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Sucesso',
                            'Usuário Registrado com Sucesso !!!',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else alert('Erro ao tentar Registrar o Usuário !!!');
                }
            );
        });
    };

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
                        onChangeText={
                            (userName) => setUserName(userName)
                        } />
                    <TextInput
                        placeholder='CORREO'
                        style={styles.inputStyle}
                        onChangeText={
                            (userContact) => setUserContact(userContact)
                        } />
                    <TextInput
                        placeholder='CONTRASEÑA'
                        style={styles.inputStyle}
                        onChangeText={
                            (userAddress) => setUserAddress(userAddress)
                        } />
                    <TextInput
                        placeholder='CONTRASEÑA'
                        style={styles.inputStyle} />
                    <TouchableOpacity style={styles.button} onPress={register_user}>
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



export default Register;



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
