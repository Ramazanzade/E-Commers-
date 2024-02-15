import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../../assets/imge/ForgotOtp_img/arrow-left.svg'
import One from '../../../assets/imge/ForgotOtp_img/1.svg'
import One2 from '../../../assets/imge/ForgotOtp_img/2.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const New_Password_Headr = ({navigation}:any) => {
  return (
    <View>
        <View>
            <TouchableOpacity style={{ marginTop: '5%', marginLeft: '5%' }} onPress={() => navigation.navigate('OTP')}>
                <Icon height={30} width={30} />
            </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5%' , width:SCREEN_WIDTH}}>
            <View style={{display:'flex',flexDirection:'row'}}>
                <View>
                    <One/>
                </View>
                <View style={{width:'80%', alignSelf:'center', marginLeft:'-10%'}}>
                    <Text style={{ fontSize: 30, color: '#1A1C1E', fontWeight: '800' }}>New Password</Text>
                    <Text style={{ color: '#6C7278', fontWeight: '400', fontSize: 15 }}>Your new password must be different from previous used password.</Text>
                </View>
            </View>
            <View style={{ marginTop: '-2%' }}>
                <One2 />
            </View>
        </View>
    </View>
)
}

export default New_Password_Headr