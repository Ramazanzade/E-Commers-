import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/common'
import One3 from '../../../assets/imge/ForgotOtp_img/3.svg'
import One4 from '../../../assets/imge/ForgotOtp_img/4.svg'
import Message from '../../../assets/imge/ForgotOtp_img/message-notif.svg'
const Forgot_Body = ({ onRegister, navigation }: any) => {
    const [email, setemail] = useState('')
    const [signInColor, setSignInColor] = useState('#F63D68');
    const [signInColortext, setSignInColortext] = useState('#98A2B3');
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        if (email.trim() !== '') {
            setSignInColor('#F63D68');
            setSignInColortext('#FCFCFD')
        } else {
            setSignInColor('#F2F4F7');
            setSignInColortext('#98A2B3')
        }
    }, [email]);
    const resetState = () => {
        setemail('');
        setModalVisible(false);
    };
    const Next = () => {
        console.log('4');

        if (email.trim() !== '') {
            setModalVisible(true);
            console.log('1');
        } else if (email.trim() !== '') {
            navigation.navigate('OTP')
            console.log('2');

        }
        console.log('3');


    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', flex:1 }}>
          <View>
          <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginVertical: '7%' }}>
                <Text style={{ position: 'absolute', top: -10, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 14 }}>
                    Email
                </Text>
                <TextInput
                    onChangeText={setemail}
                    value={email}
                    placeholder='Enter your email or number'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 17, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
            </View>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                <View>
                    <One3 />
                </View>
                <View>
                    <One4 />
                </View>
            </View>
          </View>
            <View style={{ alignSelf: 'center', marginBottom:'10%'}}>
                <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={Next}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: signInColortext, fontWeight: '500' }}>Next</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        resetState();
                    }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(17, 17, 17, 0.3)' }}>
                        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: SCREEN_WIDTH - 40, }}>
                            <View style={{ backgroundColor: '#F63D68', alignSelf: 'center', borderRadius: 50, padding: '5%', marginTop: '-18%' }}>
                                <Message />
                            </View>
                            <View style={{ marginTop: '15%' }}>
                                <Text style={{ color: '#1D2939', textAlign: 'center', fontSize: 23, }}>Check your email</Text>
                                <Text style={{ color: '#98A2B3', textAlign: 'center', fontSize: 15, marginVertical: '5%' }}>We have sent a instructions to recover your password to your email</Text>
                            </View>
                            <TouchableOpacity
                                style={{ marginTop: '12%', alignSelf: 'center', backgroundColor: '#292929', width: SCREEN_WIDTH / 1.8, borderRadius: 50, marginBottom: '2%' }}
                                onPress={() => navigation.navigate('OTP')}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center', paddingVertical: '4%' }}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}


export default Forgot_Body