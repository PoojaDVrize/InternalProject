import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/AuthScreens/Login'
import Signup from '../../Screens/AuthScreens/Signup'
import BuyerDrawerNav from '../../Navigation/BuyerDrawerNav'
import ProductDetails from '../../Screens/BuyerScreens/ProductDetails'
const AuthStack = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='BuyerHome' component={BuyerDrawerNav} />
        </Stack.Navigator>
    )
} 

export default AuthStack