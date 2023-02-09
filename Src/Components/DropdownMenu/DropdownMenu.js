import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import COLORS from "../../Utils/Colors";

const DropdownMenu = ({isFocus,setIsFocus,name,...props}) => {
    return (
        <Dropdown
            style={[styles.dropdown, isFocus]}
            placeholderStyle={styles.txt}
            selectedTextStyle={styles.txt}
            itemTextStyle={{color:'black'}}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? ` ${name}` : '...'}
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            {...props}
        />
    )
}

export default DropdownMenu

const styles = StyleSheet.create({
    dropdown: {
        width: '90%',
        height: 64,
        borderColor: COLORS.lightGrey,
        borderWidth: 3,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: COLORS.lightWhite,
        color:COLORS.red,
    },
    txt: {
        fontSize: 17,
        fontFamily: 'Alexandria-Medium',
        textAlign: 'center',
        color:'gray'
    },
})