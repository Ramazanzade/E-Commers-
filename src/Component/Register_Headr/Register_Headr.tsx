import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Register from '../../assets/imge/Register_img/Abstract.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
const Register_Headr = () => {
    return (
        <Animated.View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:SCREEN_WIDTH-20, alignSelf:'flex-end'}}>
            <View style={{alignSelf:"center"}}>
                <Text style={{color:'#1A1C1E', fontSize:30, fontWeight:'700'}}>Sign in to your Account</Text>
                <Text style={{color:'#6C7278', fontSize:15, fontWeight:'300', marginTop:'2%'}}>Welcome back to our community!</Text>
            </View>
            <View>
                <Register height={200} width={100}/>
            </View>
        </Animated.View>
    )
}

export default Register_Headr