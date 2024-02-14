import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AccountSetupHeadre from '../../Component/AccountSetupHeadre/AccountSetupHeadre'
import { SCREEN_WIDTH } from '../../Utils/common'
import Another_entry from '../../Component/Anotherentry_Account/Another_entry'

const Account_Setup = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <AccountSetupHeadre/>
        <View>
            <TouchableOpacity style={{backgroundColor:'#F63D68', width:SCREEN_WIDTH-40, alignSelf:'center', borderRadius:50, marginBottom:'5%'}} onPress={()=> navigation.navigate('RegisterScreen')}>
                <Text style={{color:'#FCFCFD', textAlign:'center', fontSize:20,padding:'5%', fontWeight:'500'}}>Sign In with email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#F2F4F7', width:SCREEN_WIDTH-40, alignSelf:'center', borderRadius:50}}>
                <Text style={{color:'#667085', textAlign:'center', fontSize:20,padding:'5%', fontWeight:'500'}}>Sign In with email</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:'5%'}}>
        <Another_entry/>
        </View>
        <View style={{marginTop:'-15%', width:SCREEN_WIDTH-40,alignSelf:'center'}}>
            <View style={{alignSelf:'center', display:'flex',flexDirection:'row', marginBottom:'6%'}}>
                <Text style={{color:'#A9A9A9', fontSize:17, fontWeight:'500'}}>Don’t have an account ?  </Text>
                <TouchableOpacity>
                    <Text style={{color:'#F63D68', fontSize:17, fontWeight:'500'}}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center', display:'flex',flexDirection:'column' }}>
                <Text style={{color:'#A9A9A9', fontSize:15, textAlign:'center'}}>Signing up implies acceptance of our </Text>
                <TouchableOpacity>
                    <Text style={{color:'#F63D68', fontSize:15, textAlign:'center'}}>Terms & Conditions and Privacy Policy.</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Account_Setup