import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AccountSetupHeadre from '../../Component/AccountSetupHeadre/AccountSetupHeadre'
import { SCREEN_WIDTH } from '../../Utils/common'
import Another_entry from '../../Component/Anotherentry_Account/Another_entry'
import Register_Footer from '../../Component/Register_Footer/Register_Footer'

const Account_Setup = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <AccountSetupHeadre />
            <View style={{marginTop:'-15%'}}>
                <TouchableOpacity style={{ backgroundColor: '#F63D68', width: SCREEN_WIDTH - 40, alignSelf: 'center', borderRadius: 50, marginBottom: '5%' }} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={{ color: '#FCFCFD', textAlign: 'center', fontSize: 15, padding: '5%', fontWeight: '500' }}>Sign In with email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#F2F4F7', width: SCREEN_WIDTH - 40, alignSelf: 'center', borderRadius: 50 }}>
                    <Text style={{ color: '#667085', textAlign: 'center', fontSize: 15, padding: '5%', fontWeight: '500' }}>Continue with Guest</Text>
                </TouchableOpacity>
            </View>
            <View >
                <View style={{ marginTop: '8%'}}>
                    <Another_entry />
                </View>
                <View style={{marginTop:'-15%'}}>
                    <Register_Footer />
                </View>
            </View>
        </View>
    )
}

export default Account_Setup