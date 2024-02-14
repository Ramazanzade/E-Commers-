import { View, Text, TextInput } from 'react-native'
import React,{useState} from 'react'
import Register_Headr from '../../Component/Register_Headr/Register_Headr'
import { SCREEN_WIDTH } from '../../Utils/common'
import Register_inuput from '../../Component/Register_inuput/Register_inuput'

const Register = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Register_Headr/>
        <Register_inuput/>
    </View>
  )
}

export default Register