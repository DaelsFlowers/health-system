import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import { DatabaseConnection } from './database/database-connection'

const db = DatabaseConnection.getConnection();

const Ejercicios = ({ navigation }) => {

    let [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM AllData',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setFlatListItems(temp);
                }
            );
        });
    }, []);

    let listItemView = (item) => {
        return (
            <View
                key={item.Id}
                style={{ backgroundColor: '#EEE', marginTop: 10, padding: 5, borderRadius: 10 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        color: '#111',
                        fontSize: 20,
                        fontWeight: '700',
                        marginBottom: 5
                    }}>
                        {item.name}
                    </Text>

                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                }}>
                    <View style={{ margin: 3, marginHorizontal: 40, alignItems: "center" }}>
                        <Text style={styles.textheader}>TIEMPO</Text>
                        <Text style={styles.textbottom}>{item.timer}</Text>
                    </View>
                    <View style={{ margin: 3, marginHorizontal: 40, alignItems: "center" }}>
                        <Text style={styles.textheader}>FECHA</Text>
                        <Text style={styles.textbottom}>{item.date}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={styles.content}>
            <View style={styles.contenido}>
                <ScrollView>
                    <FlatList
                        data={flatListItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => listItemView(item)}
                    />
                </ScrollView>
                {/* <View style={styles.data}>
                    <Text style={styles.texto}>Calorias Quemadas:</Text>
                    <Text style={styles.texto}>Tiempo Total:</Text>
                    <Text style={styles.texto}>Ultima Rutina:</Text>
                    <Text style={styles.texto}>Fecha:</Text>
                </View>
                <View style={styles.ultimos}>
                    <Text style={styles.textoul}>ULTIMOS EJERCICIOS REALIZADOS</Text>
                </View> */}
            </View>
        </ScrollView>

    )
}

export default Ejercicios

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3A3131"
    },
    contenido: {
        margin: 20,
    },
    texto: {
        color: "#fff",
        fontSize: 20,
        textAlign: "left",
    },
    textoul: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 30,
        marginTop: 20,
        fontWeight: '900',
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    input: {
        borderColor: "#4630eb",
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        margin: 16,
        padding: 8,
    },
    listArea: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        paddingTop: 16,
    },
    sectionContainer: {
        marginBottom: 16,
        marginHorizontal: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },
    textheader: {
        color: '#111',
        fontSize: 16,
        fontWeight: '700',

    },
    textbottom: {
        color: '#111',
        fontSize: 16,
    },
})