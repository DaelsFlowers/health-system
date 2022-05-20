import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import Register from '../Screens/Register';

const Stack = createStackNavigator();

export default function AuthStack() {

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}