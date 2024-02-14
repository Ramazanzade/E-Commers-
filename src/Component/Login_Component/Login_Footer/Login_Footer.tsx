import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fvector from '../../../assets/imge/Login_img/Vector.svg'
import Fvector2 from '../../../assets/imge/Login_img/Group-2.svg'

const Login_Footer = () => {
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View >
                <Fvector/>
            </View>
            <View style={{ alignSelf:'flex-end', display: 'flex', flexDirection: 'row', marginBottom: '6%' }}>
                <Text style={{ color: '#A9A9A9', fontSize: 17, fontWeight: '500' }}>Have an account ? </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#F63D68', fontSize: 17, fontWeight: '500' }}>  Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:'10%'}}>
                <Fvector2/>
            </View>
        </View>
    )
}

export default Login_Footer