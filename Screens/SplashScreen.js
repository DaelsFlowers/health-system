import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo'
import AwesomeAlert from 'react-native-awesome-alerts';




function SplashScreen() {
    const { showAlert } = this.state;

    const netInfo = useNetInfo()

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    return (
        <View style={styles.container}>

            <Text>I'm AwesomeAlert</Text>
            <TouchableOpacity onPress={() => {
                this.showAlert();
            }}>
                <View style={styles.button}>
                    <Text style={styles.text}>Try me!</Text>
                </View>
            </TouchableOpacity>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Error Internet"
                message="No se encuentra conexion a internet, los videos no cargaran"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="De Acuerdo"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    this.hideAlert();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    },
    text: {
        color: '#fff',
        fontSize: 15
    }
});

export default SplashScreen;