import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView, Text, TouchableOpacity } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

export default function DominadasAux() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setCustomInterval] = useState();

    const startTime = () => {
        setCustomInterval(
            setInterval(() => {
                changeTime();
            }, 1000)
        );
    };

    const stopTimer = () => {
        if (customInterval) {
            clearInterval(customInterval);
        }
    };


    const clear = () => {
        stopTimer();
        setSeconds(0);
        setMinutes(0);
    }

    const changeTime = () => {
        setSeconds((prevState) => {
            if (prevState + 1 == 60) {
                setMinutes(minutes + 1);
                return 0;
            }
            return prevState + 1;
        });
    };



    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>

                <Text style={styles.cronometro} >
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </Text>

                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: "https://res.cloudinary.com/dqztp4urd/video/upload/v1651700167/dominadas_azjrje.mp4"
                    }}
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
                <TouchableOpacity onPress={status ? startTime : stopTimer}>
                    <View style={styles.buttons}>
                        <Button
                            color={"#4F4646"}
                            title={status.isPlaying ? "Pause" : "Play"}
                            onPress={(() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync())}
                        ></Button>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    video: {
        width: "100%",
        height: 500
    },
    buttons: {

        marginTop: 40,
    },
    cronometro: {
        color: "#fff",
        marginBottom: 10,
        textAlign: "center",
        fontSize: 32,

    }
});