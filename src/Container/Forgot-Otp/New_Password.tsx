import { View, Text } from 'react-native'
import React from 'react'
import New_Password_Headr from '../../Component/Forgot_Otp_Component/New_Password/New_Password_Headr'
import New_Password_Body from '../../Component/Forgot_Otp_Component/New_Password/New_Password_Body'

const New_Password = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF',flex:1}}>
      <New_Password_Headr navigation={navigation}/>
      <New_Password_Body navigation={navigation}/>
    </View>
  )
}

export default New_Password