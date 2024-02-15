import { View, Text, TextInput, TouchableOpacity,Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Eye from '../../../assets/imge/Register_img/eye.svg'
import IsEye from '../../../assets/imge/Register_img/eye-slash.svg'
import NewVector from '../../../assets/imge/ForgotOtp_img/3.svg'
import NewVector2 from '../../../assets/imge/ForgotOtp_img/4.svg'
import Message from '../../../assets/imge/ForgotOtp_img/tick-square.svg'
const New_Password_Body = ({navigation}:any) => {
  const [paswword, setpaswword] = useState('')
  const [oterpaswword, setoterpaswword] = useState('')
  const [show, setshow] = useState(false)
  const [hideText, setHideText] = useState(true);
  const [otershow, setotershow] = useState(false)
  const [oterhideText, setoterHideText] = useState(true);
  const [signInColor, setSignInColor] = useState('#F63D68');
  const [signInColortext, setSignInColortext] = useState('#98A2B3');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (paswword.trim() !== '' && oterpaswword.trim() !== '') {
      setSignInColor('#F63D68');
      setSignInColortext('#FCFCFD')
    } else {
      setSignInColor('#F2F4F7');
      setSignInColortext('#98A2B3')
    }
  }, [paswword, oterpaswword]);
  const presshow = () => {
    setshow(!show)
    setHideText(!hideText);
  }
  const oterpresshow = () => {
    setotershow(!otershow)
    setoterHideText(!oterhideText);
  }
  const New =()=>{
    if (paswword.trim() !== '' && oterpaswword.trim() !=='') {
        setModalVisible(true);
        console.log('1');
    }
    console.log('3');
  }
  const resetState = () => {
    setModalVisible(false);
};
  return (
    <View style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'space-between'}}>
      <View>
        <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
          <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color:'rgba(172, 181, 187, 1)' }}>
            New Password
          </Text>
          <TextInput
            onChangeText={setpaswword}
            value={hideText ? paswword.replace(/./g, '*') : paswword}
            placeholder='Enter your new password'
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
        <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginTop: '10%' }}>
          <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color:'rgba(172, 181, 187, 1)' }}>
            Confirm Password
          </Text>
          <TextInput
            onChangeText={setoterpaswword}
            value={oterhideText ? oterpaswword.replace(/./g, '*') : oterpaswword}
            placeholder='Enter your confirm password'
            style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
            placeholderTextColor='#ACB5BB'
          />
          <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
            <TouchableOpacity onPress={oterpresshow} style={{}}>
              {otershow ? (
                <Eye />
              ) : (
                <IsEye />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5%' }}>
          <NewVector />
          <NewVector2 />
        </View>
      </View>
      <View style={{marginBottom:'12%'}}>
        <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={New}>
          <Text style={{ textAlign: 'center', fontSize: 15, color: signInColortext, fontWeight: '500' }}>Reset Password</Text>
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
                                <Text style={{ color: '#1D2939', textAlign: 'center', fontSize: 23, }}>Reset Succesfully</Text>
                                <Text style={{ color: '#98A2B3', textAlign: 'center', fontSize: 15, marginVertical: '4%' }}>Please re-login to get started!</Text>
                            </View>
                            <TouchableOpacity
                                style={{ marginTop: '12%', alignSelf: 'center', backgroundColor: '#292929', width: SCREEN_WIDTH / 1.8, borderRadius: 50, marginBottom: '2%' }}
                                onPress={() => navigation.navigate('AccountSetupScreen')}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center', paddingVertical: '4%' }}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
          </Modal>
      </View>
    </View>
  )
}

export default New_Password_Body