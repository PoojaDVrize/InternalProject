import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../Utils/Colors';
import { fontSizes } from '../../../Utils/sizes';
import ProductCard from '../../../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredData, UserProductDetails } from '../../../Store/Actions/Actions';

const Products = ({ navigation }) => {

    const dispatch = useDispatch();
    const { isLoading, productsData, filteredData, error } = useSelector(state => state.ProductReducer);

    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(UserProductDetails());
       // console.log(isLoading, productsData, filteredData, error);
    }, []);

    const searchFilter = (val) => {
        setSearch(val);
        if (val) {
            let text = val.toLowerCase();
            const newData = productsData.filter((item) => {
                return item.name.toLowerCase().indexOf(text) > -1;
            });
            dispatch(setFilteredData(newData));
        } else {
            dispatch(setFilteredData(productsData));
        }

    }
    return (
        <View style={styles.container}>
            {isLoading &&
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={COLORS.primaryColor} /> 
                </View>
            }
            {!isLoading && error ?
                <Text style={{ fontSize: 26 }}>Error : {error}</Text>
                : null
            }
            {!isLoading && productsData.length ? (
                <View style={{ flex: 1 }}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name='menu-sharp' size={fontSizes.xxl} color={COLORS.red} />
                        </TouchableOpacity>
                        <Text style={styles.headTitle}>Products</Text>
                        <TouchableOpacity>
                            <Ionicons name='cart' size={fontSizes.xxl} color={COLORS.red} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchArea}>
                            <Ionicons name='search' size={25} color={COLORS.red} style={{ marginRight: 5 }} />
                            <TextInput
                                value={search}
                                style={styles.input}
                                placeholder='Search'
                                onChangeText={(val) => searchFilter(val)} />
                        </View>
                        <View style={styles.filter}>
                            <Ionicons name='filter-sharp' size={28} color={COLORS.white} />
                        </View>
                    </View>
                    <FlatList
                        data={filteredData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(id, index) => index.toString()}
                        renderItem={({ item }) => <ProductCard item={item} />}
                    />
                </View>
            ) :
                null
            }
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        margin: 5
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    headTitle: {
        fontSize: fontSizes.xl,
        color: COLORS.black,
        fontFamily: "Alexandria-Bold",
        color: COLORS.red
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.red,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        flex: 1
    },
    input: {
        fontSize: fontSizes.md,
        fontFamily: 'Alexandria-Medium',
        height: 50,
        width: 250
    },
    filter: {
        backgroundColor: COLORS.red,
        width: 50,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 5
    }
})