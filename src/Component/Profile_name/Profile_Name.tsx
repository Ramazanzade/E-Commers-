import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Notifications from '../Notifications/Notifications'

const Profile_Name = () => {
    return (
        <View style={{ width: SCREEN_WIDTH , display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'5%'}}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000' , marginLeft:'7%'}}>Hello, Narmin</Text>
                <Text style={{ color: 'rgba(208, 213, 221, 1)', fontSize: 15, marginLeft:'7%' }} >2972 Westheimer Rd. Santa A... </Text>
            </View>
            <View style={{marginRight:'5%', alignSelf:'center'}}>
                <Notifications/>
            </View>
        </View>
    )
}

export default Profile_Name