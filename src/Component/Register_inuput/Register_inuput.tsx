import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Eye from '../../assets/imge/Register_img/eye.svg'
import IsEye from '../../assets/imge/Register_img/eye-slash.svg'
import Forgot_Paswword from '../Forgot_Paswword/Forgot_Paswword'
import Splas_Loading from '../../Constans/Splas_Loading/Splas_Loading'
const Register_inuput = ({ navigation, onRegister }: any) => {
    const [email, setemail] = useState('')
    const [paswword, setpaswword] = useState('')
    const [show, setshow] = useState(false)
    const [hideText, setHideText] = useState(true);
    const [signInColor, setSignInColor] = useState('#F63D68');
    const [signInColortext, setSignInColortext] = useState('#98A2B3');
    const [buttonOpacity] = useState(new Animated.Value(0));
    useEffect(() => {
        if (paswword.trim() !== '' && email.trim() !== '') {
            setSignInColor('#F63D68');
            setSignInColortext('#FCFCFD')
        } else {
            setSignInColor('#F2F4F7');
            setSignInColortext('#98A2B3')
        }
    }, [email, paswword]);

    const SingIn = () => {
        if (paswword.trim() !== '' && email.trim() !== '') {
            onRegister();
        } else {
            
        }

    }
    const presshow = () => {
        setshow(!show)
        setHideText(!hideText);
    }
    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 400,
            delay: 400,
            useNativeDriver: true,
        }).start();
    })
    return (
            <View style={{marginTop:'-5%'}}>
                <View style={{ marginVertical: '5%' }}>
                    <View style={{ marginVertical: '5%' }}>
                    <TextInput
                        onChangeText={setemail}
                        value={email}
                        placeholder='Enter your email or number'
                        style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 13, color: '#ACB5BB', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                    />
                </View>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        onChangeText={setpaswword}
                        value={hideText ? paswword.replace(/./g, '*') : paswword}
                        placeholder='Enter your password'
                        style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 13, color: '#ACB5BB', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                    />
                    <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
                        <TouchableOpacity onPress={presshow} style={{}}>
                            {show ? (
                                <Eye />
                            ) : (
                                <IsEye />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View >
                    <View>
                        <Forgot_Paswword navigation={navigation} />
                    </View>
                    <Animated.View style={{ alignSelf: 'center',marginTop:'-8%', transform: [{ translateY: buttonOpacity.interpolate({ inputRange: [0, 1], outputRange: [-50, 0] }) }] }}>
                        <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={SingIn}>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: signInColortext, fontWeight: '500' }}>Sign In</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
    )
}

export default Register_inuput