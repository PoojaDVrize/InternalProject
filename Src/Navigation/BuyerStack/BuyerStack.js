import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../../Screens/BuyerScreens/ProductDetails';
import BuyerDrawerNav from '../BuyerDrawerNav';

const BuyerStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='BuyerHome' component={BuyerDrawerNav} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
        </Stack.Navigator>
    )
}

export default BuyerStack;

const styles = StyleSheet.create({})