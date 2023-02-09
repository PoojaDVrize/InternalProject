import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../Utils/Colors';
import { fontSizes } from '../../Utils/sizes';

const SocialButtons = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>
                --------- or SignIn with ---------
            </Text>
            <View style={styles.socialLoginView}>
                <TouchableOpacity>
                    <Icon name="facebook" style={styles.icon} color={COLORS.red} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="github" style={styles.icon} color={COLORS.red} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="twitter" style={styles.icon} color={COLORS.red} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialButtons

const styles = StyleSheet.create({
    text:{
        textAlign: 'center', 
        fontSize: 16, 
        color: COLORS.black,
        marginTop: 10,
        fontFamily: 'Alexandria-Medium'
    },
    socialLoginView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    icon:{
        fontSize: fontSizes.xxl, 
        //color: COLORS.red,
    }
})