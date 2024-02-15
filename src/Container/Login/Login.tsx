import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Login_Header from '../../Component/Login_Component/Login_Header/Login_Header'
import Login_Input from '../../Component/Login_Component/Login_Input/Login_Input'
import Login_Footer from '../../Component/Login_Component/Login_Footer/Login_Footer'
import Splas_Loading from '../../Constans/Splas_Loading/Splas_Loading'

const Login = ({navigation}:any) => {
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
                <Splas_Loading />
            ) : (
                <View>
                    <Login_Header />
                    <Login_Input  navigation={navigation} onRegister={handleRegister}/>
                    <Login_Footer navigation={navigation} />
                </View>
            )}
    </View>
    )
}

export default Login