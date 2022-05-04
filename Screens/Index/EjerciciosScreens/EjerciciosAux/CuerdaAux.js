import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import * as FileSystem from 'expo-file-system';


const CuerdaAux = ({ navigation }) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <Video source={{ localUri: FileSystem. }}
                    rate={1.0}
                    volume={0}
                    isMuted={true}
                    resizeMode="cover"
                    isLooping
                    shouldPlay
                    style={{ width: 300, height: 300 }}
                />
            </View>
        </ScrollView>

    )
}

export default CuerdaAux

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})