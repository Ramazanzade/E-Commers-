import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Forgotvector from '../../assets/imge/Register_img/keds.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
const Forgot_Paswword = ({navigation}:any) => {
    return (
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:SCREEN_WIDTH-20, alignSelf:'flex-start'}}>
            <View>
                <Forgotvector width={100} height={200}/>
            </View>
            <View style={{marginTop:'5%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ForgotOtpScreen')}>
                    <Text style={{color:'#F63D68', fontSize:15, fontWeight:'500'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Forgot_Paswword