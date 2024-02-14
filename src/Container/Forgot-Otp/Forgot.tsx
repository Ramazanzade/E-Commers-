import { View, Text } from 'react-native'
import React from 'react'
import Forgot_Headr from '../../Component/Forgot_Otp_Component/Forgot/Forgot_Headr'
import Forgot_Body from '../../Component/Forgot_Otp_Component/Forgot/Forgot_Body'

const Forgot = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF',flex:1}}>
        <Forgot_Headr navigation={navigation}/>
        <Forgot_Body navigation={navigation}/>
    </View>
  )
}

export default Forgot