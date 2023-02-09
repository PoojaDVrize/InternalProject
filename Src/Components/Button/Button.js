import React from "react";
import { 
    SafeAreaView, 
    View, 
    StyleSheet,
     Text,
     TouchableOpacity
     } from 'react-native';
import COLORS from "../../Utils/Colors";

const Button = ({label, ...rest}) => {
    return (
        <View style={{width:'100%'}}>
            <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: COLORS.red,
        width: '60%',
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
        padding: 10,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontFamily: 'Alexandria-Bold',
        textAlign: 'center'
    }
})


export default Button;