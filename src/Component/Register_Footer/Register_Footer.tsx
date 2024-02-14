import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'

const Register_Footer = ({navigation}:any) => {
    return (
        <View>
            <View style={{width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
                <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', marginBottom: '6%' }}>
                    <Text style={{ color: '#A9A9A9', fontSize: 17, fontWeight: '500' }}>Don’t have an account ?  </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <Text style={{ color: '#F63D68', fontSize: 17, fontWeight: '500' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ color: '#A9A9A9', fontSize: 15, textAlign: 'center' }}>Signing up implies acceptance of our </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#F63D68', fontSize: 15, textAlign: 'center' }}>Terms & Conditions and Privacy Policy.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register_Footer