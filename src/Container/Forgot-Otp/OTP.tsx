import { View, Text } from 'react-native'
import React from 'react'
import OTP_Headr from '../../Component/Forgot_Otp_Component/OTP/OTP_Headr'
import OTP_Body from '../../Component/Forgot_Otp_Component/OTP/OTP_Body'

const OTP = ({navigation}:any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <OTP_Headr  navigation={navigation} />
      <OTP_Body  navigation={navigation} />
    </View>
  )
}

export default OTP