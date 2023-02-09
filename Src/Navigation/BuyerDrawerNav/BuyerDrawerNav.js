import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from '../../Screens/BuyerScreens/Products'
import ProfileScreen from '../../Screens/CommonScreens/ProfileScreen';
import ChangePassword from '../../Screens/CommonScreens/ChangePassword';
import BuyerCustomDrawer from '../../Components/BuyerCustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../Utils/Colors';
import { fontSizes } from '../../Utils/sizes';

const Drawer = createDrawerNavigator();

const BuyerDrawerNav = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <BuyerCustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLORS.red,
                drawerActiveTintColor: COLORS.white,
                drawerInactiveTintColor: COLORS.black,
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: fontSizes.md,
                    letterSpacing: 2,
                    fontFamily: 'Alexandria-Regular',
                }
            }}>
            <Drawer.Screen 
            name='Products'
             component={Products}
             options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='heart-outline' size={fontSizes.lg} color={color} />
                )
            }}
              />
            <Drawer.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name='person-outline' size={fontSizes.lg} color={color} />
                    )
                }} />
            <Drawer.Screen 
            name='ChangePassword' 
            component={ChangePassword}
            options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='lock-closed-outline' size={fontSizes.lg} color={color} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default BuyerDrawerNav

const styles = StyleSheet.create({})