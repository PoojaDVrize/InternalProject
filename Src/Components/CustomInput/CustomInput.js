import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../../Utils/Colors";

const CustomInput = ({
  iconName,
  password,
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  
  return (
    <View style={{marginBottom: 10, width:'90%'}}>
      <View style={style.inputContainer}>
        <Icon
          name={iconName}
          style={style.iconStyle}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={hidePassword}
          placeholderTextColor="gray"
          style={style.input}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            style={{color: COLORS.black, fontSize: 25,}}
          />
        )}
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 64,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 3,
    borderRadius: 15,
    placeholderTextColor: COLORS.black,
    marginHorizontal: 14,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
  },
  iconStyle: {
    color: COLORS.red, 
    fontSize: 28,
    marginRight: 10
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontSize: 17,
    fontFamily: 'Alexandria-Medium',
  }
});

export default CustomInput;