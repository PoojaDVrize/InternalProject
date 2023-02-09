import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontSizes } from '../../../Utils/sizes';
import Button from '../../../Components/Button'; 

const ProductDetails = ({ navigation, route }) => {
    const product = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, margin: 5 }}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={fontSizes.xxl} color={COLORS.red} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="cart" size={fontSizes.xxl} color={COLORS.red} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.imageUrl }}
                    style={{ width: 200, height: 200, resizeMode: 'cover', flex: 1 }} />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.priceTag}>
                    <Text style={styles.priceText}>Rs. {product.price}/-</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            fontSize: fontSizes.lg,
                            fontFamily: 'Alexandria-Regular',
                            color: COLORS.black
                        }}>About</Text>
                    <Text
                        style={{
                            color: COLORS.black,
                            fontSize: fontSizes.md,
                            lineHeight: 22,
                            marginTop: 10,
                        }}>
                        {product.description}
                    </Text>

                </View>
                <View style={{marginTop:20}}>
                    <Button label='Buy now' />
                </View>
            </View>

        </View >
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.lightWhite,
        marginHorizontal: 8,
        marginBottom: 8,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 20,
        paddingLeft:10
    },
    productName: {
        fontSize: fontSizes.lg,
        fontFamily: 'Alexandria-Bold',
        color: COLORS.black
    },
    priceTag: {
        backgroundColor: COLORS.red,
        width: '45%',
        height: '15%',
        marginVertical: 10,
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    priceText: {
        marginLeft: 10,
        color: COLORS.white,
        fontFamily: 'Alexandria-Bold',
        fontSize: fontSizes.md,
    }
})