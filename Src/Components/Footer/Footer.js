import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import COLORS from "../../Utils/Colors";
import { fontSizes } from '../../Utils/sizes';

const Footer = ({text,screen,goto}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.footer}>
            <View>
                <Text style={styles.footerText}>{text}
                    <Text
                        style={{ color: COLORS.red, fontWeight: 'bold' }}
                        onPress={() => {
                            navigation.navigate(screen)
                        }}> {goto}</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10
        // position: 'absolute',
        // bottom: 20
    },
    footerText: {
        color: COLORS.black,
        fontSize: fontSizes.md,
        fontFamily: 'Alexandria-Light'
    },
})