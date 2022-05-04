import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';


//screens
import Home from './Screens/Index/Home';
import Ejercicios from './Screens/Index/Ejercicios';
import Informacion from './Screens/Index/Informacion';
import Historial from './Screens/Index/Historial';


//ejercicios
import Cuerda from './Screens/Index/EjerciciosScreens/Cuerda';
import Dominadas from "./Screens/Index/EjerciciosScreens/Dominadas"
import Flexion from "./Screens/Index/EjerciciosScreens/Flexion"
import Fullroll from "./Screens/Index/EjerciciosScreens/Fullroll"
import Jumping from "./Screens/Index/EjerciciosScreens/Jumping"
import Pierna from "./Screens/Index/EjerciciosScreens/Pierna"
import Plancha from "./Screens/Index/EjerciciosScreens/Plancha"
import Sentadilla from "./Screens/Index/EjerciciosScreens/Sentadilla"

//Aux
import CuerdaAux from './Screens/Index/EjerciciosScreens/EjerciciosAux/CuerdaAux';



const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}


const Index = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Cuerda"
        component={Cuerda}
        options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Cuerda", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
      <Stack.Screen
        name="Pierna"
        component={Pierna}
        options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "Pierna", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
      <Stack.Screen
        name="Ejercicios"
        component={EjerciciosScreens}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Informacion"
        component={Informacion}
        options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "INFORMACION", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
      <Stack.Screen
        name="Historial"
        component={Historial}
        options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "HISTORIAL", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
    </Stack.Navigator>
  )
}

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
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;