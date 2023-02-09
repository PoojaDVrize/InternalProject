import { StyleSheet, Text, View, TouchableOpacity, Keyboard, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../../Utils/Colors'
import { fontSizes } from '../../../Utils/sizes'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/Button';
import { isContainsLowercase, isContainsNumber, isContainsSymbol, isContainsUppercase } from '../../../Utils/CommonMethods';

const ChangePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validNewPassword, setValidNewPassword] = useState(true);

  useEffect(() => {
    textInputChange(newPassword, 'NewPassword');
  }, [newPassword]);

  const textInputChange = (val, type) => {

    if (type == "NewPassword") {
      setNewPassword(val);
      if (!newPassword) {
        setValidNewPassword(true);
      } else if (newPassword.length < 5 || !isContainsUppercase(newPassword) || !isContainsLowercase(newPassword) || !isContainsNumber(newPassword) || !isContainsSymbol(newPassword)) {
        setValidNewPassword(false);
      }
      else {
        setValidNewPassword(true);
      }
    }
  }

  const submitForm = () => {
    //1.valid current pass from db ||  2.current and new password must not be same
    Keyboard.dismiss();
    if (!currentPassword || !newPassword || !validNewPassword) {
      Alert.alert('Error', 'Feilds Required');
    } else {
      console.log(currentPassword, newPassword);
      setCurrentPassword('');
      setNewPassword('');
      Alert.alert('Success', 'Password Updated Successfully');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={fontSizes.xxl} color={COLORS.red} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txt}>Change Password</Text>

        <View style={styles.inputContainer}>

          <CustomInput
            value={currentPassword}
            onChangeText={(val) => setCurrentPassword(val)}
            iconName="lock-outline"
            placeholder="Current Password"
            password
          />

          <CustomInput
            value={newPassword}
            onChangeText={(val) => textInputChange(val, 'NewPassword')}
            iconName="lock-outline"
            placeholder="New Password"
            password
          />
          {validNewPassword ? null :
            <Text style={styles.errorMsg}>Minimum Password length is 5, should have atleast
              one uppercase,lowercase,number,special character.</Text>
          }

        </View>
        <Button label="Update" onPress={submitForm} />
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 5
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  txt: {
    color: COLORS.red,
    fontSize: fontSizes.xl,
    fontFamily: 'Alexandria-Bold',
    marginLeft: 20,
    marginVertical: 20,
    letterSpacing: 2,
    textAlign: 'center'
  },
  errorMsg: {
    color: COLORS.red,
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  inputContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})