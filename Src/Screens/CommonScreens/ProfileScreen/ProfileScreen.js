import React from 'react';
import {
    View, Text, ScrollView, TouchableOpacity, TouchableHighlight, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../Utils/Colors';

const ProfileScreen = ({ navigation }) => {
    return (

        <ScrollView >
            <View style={style.View}>
                <View style={style.Background}>
                    <View style={style.Icons}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name='bars' size={30} color={COLORS.black} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='edit' size={30} color={COLORS.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={style.ProfileStyle}>
                        <TouchableHighlight >
                            <Text style={style.Title}>Name </Text>
                        </TouchableHighlight>
                        <TouchableOpacity>
                            <Text style={style.Subtitle}>User/Buyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.DisplayBackground}>
                    <View style={style.Heading}>
                        <Text style={style.HeadingText}>Personal Information</Text>
                    </View>

                    <View style={style.field}>
                        <Text style={style.fontStyle}>Name : </Text>
                        <Text style={style.fontStyle}>DOB : </Text>
                        <Text style={style.fontStyle}>Phone Number : </Text>
                        <Text style={style.fontStyle}>Email ID : </Text>
                    </View>
                    <View style={style.Heading}>
                        <Text style={style.HeadingText}>About Organization</Text>
                    </View>

                    <View style={style.field}>
                        <Text style={style.fontStyle}>Organization : </Text>
                        <Text style={style.fontStyle}>Registration ID : </Text>
                        <Text style={style.fontStyle}>Website : </Text>
                        <Text style={style.fontStyle}>Address : </Text>
                    </View>
                </View>

            </View>

        </ScrollView>

    );

}

const style = StyleSheet.create(

    {
        View: {
            flex: 1,
            backgroundColor: COLORS.offWhite,

        },
        Background: {
            padding: 8,
            width: '100%',
            height: '20%',
            backgroundColor: COLORS.offWhite,
            borderRadius: 24,
        },
        DisplayBackground: {
            backgroundColor: COLORS.red,
            marginVertical: 15,
            paddingVertical: 40,
            borderRadius: 24
        },
        Icons: {
            flexDirection: 'row',
            padding: 10,
            justifyContent: "space-between",
            backgroundColor: COLORS.offWhite
        },
        ProfileStyle: {
            alignItems: 'flex-start',
            marginHorizontal: 1,

        },
        Title: {
            fontSize: 40,
            fontWeight: 'bold',
            padding: 1,
            margin: 10,
        },
        Subtitle: {
            fontSize: 16,
            fontWeight: '400',
            color: COLORS.black,
            paddingBottom: 8,
            borderColor: COLORS.black,
            borderWidth: 2,
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: COLORS.red,
            marginBottom: 10
        },
        Heading: {
            paddingHorizontal: 40,
            alignItems: 'center'
        },
        HeadingText: {
            fontWeight: 'bold',
            fontSize: 32,
            color: COLORS.black,
            marginVertical: 8

        },
        TextFieldStyle: {

            alignItems: 'flex-start'
        },
        field: {
            alignSelf: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
            width: '80%',
            padding: 16,
            borderColor: COLORS.red,
            borderWidth: 1,
            shadowOpacity: 40,
            elevation: 1,
            borderRadius: 20,
            backgroundColor: COLORS.offWhite
        },
        fontStyle: {
            padding: 10,
            fontSize: 16,
            fontWeight: '500'
        }
    }
)



export default ProfileScreen;