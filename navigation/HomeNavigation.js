import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from '../Screens/Home';
import Ejercicios from '../Screens/Ejercicios';
import Informacion from '../Screens/Informacion';
import Historial from '../Screens/Historial';


//ejercicios
import Cuerda from '../Screens/Index/EjerciciosScreens/Cuerda';
import Dominadas from "../Screens/Index/EjerciciosScreens/Dominadas"
import Flexion from "../Screens/Index/EjerciciosScreens/Flexion"
import Fullroll from "../Screens/Index/EjerciciosScreens/Fullroll"
import Jumping from "../Screens/Index/EjerciciosScreens/Jumping"
import Pierna from "../Screens/Index/EjerciciosScreens/Pierna"
import Plancha from "../Screens/Index/EjerciciosScreens/Plancha"
import Sentadilla from "../Screens/Index/EjerciciosScreens/Sentadilla"

//Aux
import CuerdaAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/CuerdaAux';
import DominadasAux from "../Screens/Index/EjerciciosScreens/EjerciciosAux/DominadasAux"
import FlexionAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/FlexionAux';
import FullrollAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/FullrollAux';
import JumpingAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/JumpingAux';
import PiernaAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/PiernaAux';
import PlanchaAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/PlanchaAux';
import SentadillaAux from '../Screens/Index/EjerciciosScreens/EjerciciosAux/SentadillaAux';

//INFORMACION SCREENS

import CiclismoScreen from '../Screens/Index/Information/Ciclismo';
import Cardiacos from '../Screens/Index/Information/Cardiacos';
import Consejos from '../Screens/Index/Information/Consejos';
import Diabetes from '../Screens/Index/Information/Diabetes';
import Dieta from '../Screens/Index/Information/Dieta';
import Estiramientos from '../Screens/Index/Information/Estiramientos';
import Porque from '../Screens/Index/Information/Porque';
import Presion from '../Screens/Index/Information/Presion';
import Pulmonales from '../Screens/Index/Information/Pulmonales';
import Sobrepeso from '../Screens/Index/Information/Sobrepeso';
import Tabaco from '../Screens/Index/Information/Tabaco';






const EjerciciosScreens = () => {
    return (
        <Stack.Navigator initialRouteName='EjerciciosIndex'>
            <Stack.Screen
                name="EjerciciosIndex"
                component={Ejercicios}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "EJERCICIOS", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Cuerda"
                component={Cuerda}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Cuerda", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="dominadas"
                component={Dominadas}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Dominadas", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="flexion"
                component={Flexion}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Flexion", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="fullroll"
                component={Fullroll}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Fullroll", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="jumping"
                component={Jumping}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Jumping", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="pierna"
                component={Pierna}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Pierna", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="plancha"
                component={Plancha}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Plancha", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="sentadilla"
                component={Sentadilla}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Sentadilla", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />


            <Stack.Screen
                name="CuerdaAux"
                component={CuerdaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Cuerda", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="DominadasAux"
                component={DominadasAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Dominadas", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="FlexionAux"
                component={FlexionAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Flexion", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="FullrollAux"
                component={FullrollAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Fullroll", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="JumpingAux"
                component={JumpingAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Jumping", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="PiernaAux"
                component={PiernaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Pierna", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="PlanchaAux"
                component={PlanchaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Plancha", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="SentadillaAux"
                component={SentadillaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Sentadilla", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />

        </Stack.Navigator>
    )
}


const InformacionScreens = () => {
    return (
        <Stack.Navigator initialRouteName='InformacionIndex'>
            <Stack.Screen name="InformacionIndex"
                component={Informacion}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Ciclismo"
                component={CiclismoScreen}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Cardiacos"
                component={Cardiacos}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Consejos"
                component={Consejos}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Diabetes"
                component={Diabetes}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Dieta"
                component={Dieta}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Estiramientos"
                component={Estiramientos}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Porque"
                component={Porque}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Presion"
                component={Presion}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Pulmonales"
                component={Pulmonales}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Sobrepeso"
                component={Sobrepeso}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Tabaco"
                component={Tabaco}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

export default function HomeStack() {

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Cuerda"
                component={Cuerda}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Cuerda", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="CuerdaAux"
                component={CuerdaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Cuerda", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Pierna"
                component={Pierna}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Pierna", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="PiernaAux"
                component={PiernaAux}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Pierna", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
            <Stack.Screen
                name="Ejercicios"
                component={EjerciciosScreens}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Informacion"
                component={InformacionScreens}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Historial"
                component={Historial}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "HISTORIAL", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
        </Stack.Navigator>
    );

}