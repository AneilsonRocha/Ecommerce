import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Pages/Home'
import Sobre from './Pages/Sobre';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options= {{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}/>

                <Stack.Screen 
                name="Sobre" 
                component={Sobre} 
                options= {{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}