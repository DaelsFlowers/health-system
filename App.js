import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';


//screens
import Home from './Screens/Index/Home';
import Ejercicios from './Screens/Index/Ejercicios';
import Logo from "./image/ico/buttonVideo.png"

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
        name="Ejercicios"
        component={Ejercicios}

        options={{ headerShown: true, headerStyle: { backgroundColor: "#3A3131" }, headerTintColor: "#fff", headerTitleAlign: 'center', headerTitle: "EJERCICIOS", headerTitleStyle: { fontSize: 36, fontWeight: "100" } }} />
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