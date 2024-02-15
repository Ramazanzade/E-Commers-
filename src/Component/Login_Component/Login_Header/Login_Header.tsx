import { View, Text } from 'react-native'
import React from 'react'
import VectorL from '../../../assets/imge/Login_img/Star 1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import VectorD from '../../../assets/imge/Login_img/Group.svg'
const Login_Header = () => {
    return (
        <View style={{ marginTop: '5%' }}>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: SCREEN_WIDTH - 20, alignSelf: 'flex-end' }}>
                <View style={{alignSelf:'center'}}>
                    <Text style={{ fontSize: 25, color: '#1A1C1E', fontWeight: '600' }}>Registration</Text>
                    <Text style={{ color: '#6C7278', fontSize: 15 }}>Join our community!</Text>
                </View>
                <View style={{marginTop:'10%'}}>
                    <VectorL />
                </View>
            </View>
            <View style={{marginTop:'-10%'}}>
                <VectorD />
            </View>
        </View>
    )
}

export default Login_Header