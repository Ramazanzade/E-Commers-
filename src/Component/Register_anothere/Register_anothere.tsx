import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Star from '../../assets/imge/AccountSetup_imge/Star 1.svg'
import Vector from '../../assets/imge/AccountSetup_imge/Vector-a.svg'
import Google from '../../assets/imge/AccountSetup_imge/google.svg'
import Facebook from '../../assets/imge/AccountSetup_imge/Facebook.svg'
import Apple from '../../assets/imge/AccountSetup_imge/apple-seeklogo.com 1.svg'

const Register_anothere = () => {
    return (
        <View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , marginTop:'5%'}}>
                <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50, }}></View>
                <View><Text style={{ color: '#D0D5DD', fontSize: 15, fontWeight: '600' }}>Or</Text></View>
                <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50 }}></View>
            </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '7%', alignSelf:'center'}}>
                    <TouchableOpacity style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E4E7EC', borderRadius: 60, width: 60, height: 60 }}>
                        <View style={{ alignSelf: 'center', marginTop: '30%' }}>
                            <Google />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E4E7EC', borderRadius: 60, width: 60, height: 60, marginHorizontal: '5%' }}>
                        <View style={{ alignSelf: 'center', marginTop: '20%' }}>
                            <Apple />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E4E7EC', borderRadius: 60, width: 60, height: 60, }}>
                        <View style={{ alignSelf: 'center', marginTop: '30%' }}>
                            <Facebook />
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Register_anothere