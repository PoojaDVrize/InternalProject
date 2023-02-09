import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../Utils/Colors'
import { fontSizes } from '../../Utils/sizes'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails',item)}>
            <View style={styles.container}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: 130, height: 200, resizeMode: 'cover' }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.txt, { fontFamily: 'Alexandria-Bold', color: COLORS.red }]}>{item.name}</Text>
                    <Text style={styles.txt}>Category: {item.category.name}</Text>
                    <Text style={styles.txt}>Status: {item.status}</Text>
                    <Text style={styles.txt}>Rs. {item.price}/-</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnTxt}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    txt: {
        fontSize: fontSizes.md,
        color: COLORS.black,
        fontFamily: 'Alexandria-Regular',
    },
    button: {
        width: 120,
        backgroundColor: COLORS.red,
        padding: 8,
        borderRadius: 10,
    },
    btnTxt: {
        fontFamily: 'Alexandria-Regular',
        fontSize: fontSizes.md,
        color: COLORS.white,
        textAlign: 'center'
    }
})