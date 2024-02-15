import { View, Text, TextInput, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Register_Headr from '../../Component/Register_Headr/Register_Headr'
import { SCREEN_WIDTH } from '../../Utils/common'
import Register_inuput from '../../Component/Register_inuput/Register_inuput'
import Register_anothere from '../../Component/Register_anothere/Register_anothere'
import Register_Footer from '../../Component/Register_Footer/Register_Footer'
import Splas_Loading from '../../Constans/Splas_Loading/Splas_Loading'

const Register = ({ navigation }: any) => {
    const [buttonOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 200,
            delay: 300,
            useNativeDriver: true,
        }).start();
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Tabbar', { screen: 'HomeScreen' })
        }, 2000);
    };
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1, }}>
            {isLoading ? (
                <Splas_Loading/>
            ):(
                 <Animated.View style={{ opacity: buttonOpacity }}>
                <Register_Headr />
                <Register_inuput navigation={navigation} onRegister={handleRegister} />
                <Register_anothere />
                <View style={{ marginTop: '10%' }}>
                    <Register_Footer navigation={navigation} />
                </View>
            </Animated.View>
            )}
        </View>
    )
}

export default Register