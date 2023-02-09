import { Alert, Image, Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import { Button, CustomInput, Footer, SocialButtons } from '../../Components/index'
import { isValidEmail } from '../../../Utils/CommonMethods'
import COLORS from '../../../Utils/Colors'
import { fontSizes, spacing } from '../../../Utils/sizes'
import Button from '../../../Components/Button'
import CustomInput from '../../../Components/CustomInput'
import Footer from '../../../Components/Footer'
import SocialButtons from '../../../Components/SocialButtons'

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validMail, setValidMail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    useEffect(() => {
        textInputChange(email, 'Email');
        textInputChange(password, 'Password');
    }, [email, password]);

    const textInputChange = (val, type) => {

        if (type == "Email") {
            setEmail(val);
            if (email == '') {
                setValidMail(true);
            }
            else if (!isValidEmail(email)) {
                setValidMail(false);
            }
            else {
                setValidMail(true);
            }
        }

        if (type == "Password") {
            setPassword(val);
            if (password === '') {
                setValidPassword(true);
            }
            else if (password.length < 5) {
                setValidPassword(false);
            }
            else {
                setValidPassword(true);
            }
        }
    }

    const submitForm = () => {
        Keyboard.dismiss();
        if (!validMail || !validPassword || email.length == 0 || password.length == 0) {
            Alert.alert('Error', 'Feilds Required');
        } else {
            //dispatch login
            console.log(email, password);
            setEmail('');
            setPassword('');
            navigation.navigate('BuyerHome');
        
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={{ uri: 'https://uploads-ssl.webflow.com/5fdcd9ffc26d8060c8b6be80/6001f90deffd92dd8f439fd4_VrizeLogoside-p-500.png' }}
                    style={styles.image}
                    resizeMode='contain' />
            </View>
            <Text style={styles.textTitle}><Text style={{color:COLORS.red}}>Friction-less</Text> Digital Engineering</Text>

            <View style={styles.loginBanner}>
                <Text style={styles.textBody}>LogIn</Text>
            </View>

            <View style={styles.formContainer}>
                <CustomInput
                    value={email}
                    onChangeText={(val) => textInputChange(val, "Email")}
                    iconName="email-outline"
                    placeholder="Email"
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                {
                    validMail ? null : <Text style={styles.errorMsg}>Please enter a valid email</Text>
                }
                <CustomInput
                    value={password}
                    onChangeText={(val) => textInputChange(val, "Password")}
                    iconName="lock-outline"
                    placeholder="Password"
                    autoCapitalize='none'
                    password
                />
                {
                    validPassword ? null : <Text style={styles.errorMsg}>Password is less than 5 characters!</Text>
                }
            </View>

            <TouchableOpacity style={{marginBottom: spacing.md, width:'90%', flexDirection:'row' }}>
                <Text style={styles.txt}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button label="Login" onPress={submitForm} />

            <SocialButtons />
            <Footer
                text="Don't have an account?"
                screen='Signup'
                goto='Sign up'
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderColor:'blcak',
        elevation:5,
        margin:5,
    },
    image: {
        width: 250,
        height: 150,
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:fontSizes.xxl,
    },
    textTitle: {
        fontSize: fontSizes.md+2,
        color: COLORS.black,
        fontFamily: 'Alexandria-Medium',
        marginBottom:spacing.xl,
        paddingHorizontal:4,
        letterSpacing:1,
    },
    errorMsg: {
        color: COLORS.red,
        textAlign: 'center',
        fontSize: fontSizes.md,
        fontFamily: 'Alexandria-Light'
    },
    txt: {
        flex:1,
        textAlign:'right',
        color: COLORS.red,
        fontSize: fontSizes.md,
        fontFamily: 'Alexandria-Light',
    },
    textBody:{
        flex:1,
        textAlign:'left',
        color:COLORS.black,
        fontFamily:'Alexandria-Medium',
        fontSize:60,
    },
    loginBanner: {
        flexDirection: 'row',
        width:'90%',
    },
})