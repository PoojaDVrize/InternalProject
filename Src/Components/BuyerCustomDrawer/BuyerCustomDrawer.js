import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import COLORS from '../../Utils/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontSizes } from '../../Utils/sizes';
import { useNavigation } from '@react-navigation/native';

const BuyerCustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 15, borderTopWidth: 2, borderTopColor: COLORS.light }}>
                <TouchableOpacity
                    style={{ paddingVertical: 15 }}
                    onPress={() => navigation.navigate('Login')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='exit-outline' size={fontSizes.lg} color={COLORS.black} />
                        <Text style={styles.text}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BuyerCustomDrawer

const styles = StyleSheet.create({
    text: {
        color: COLORS.black,
        fontSize: fontSizes.md,
        marginLeft: 10,
        fontFamily: 'Alexandria-Regular',
        letterSpacing: 2,
    }
})