import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Notifications from '../../Component/Notifications/Notifications'
import User_Profil from '../../Component/User_Profil/User_Profil'
import Profile_List from '../../Component/Profile_List/Profile_List'

const Profile = () => {
  return (
    <View style={{backgroundColor:'rgba(255, 255, 255, 255)', flex:1}}>
      <View style={{ width: SCREEN_WIDTH - 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', alignSelf: 'center' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000', marginLeft: '7%' }}>Profile</Text>
        </View>
        <View style={{ marginRight: '5%', alignSelf: 'center', marginTop: '2%' }}>
          <Notifications />
        </View>
      </View>
      <User_Profil />
      <View style={{width:SCREEN_WIDTH-40,alignSelf:'center',height:2,backgroundColor:'rgba(228, 231, 236, 1)',marginVertical:'6%'}}></View>
      <Profile_List />
    </View>
  )
}

export default Profile