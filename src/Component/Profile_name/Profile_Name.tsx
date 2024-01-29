import { View, Text } from 'react-native'
import React from 'react'
import {SCREEN_WIDTH } from '../../Utils/common'
import Notifications from '../Notifications/Notifications'
import { useSelector } from 'react-redux'

const Profile_Name = () => {
    const data=useSelector((state:any)=>state.userReducer.value[0])
    return (
        <View style={{ width: SCREEN_WIDTH , display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'5%'}}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000' , marginLeft:'7%'}}>Hello, {data.name}</Text>
                <Text style={{ color: 'rgba(208, 213, 221, 1)', fontSize: 15, marginLeft:'7%' }} >{data.des.length > 25 ? `${data.des.substring(0, 25)}...` : data.des}</Text>
            </View>
            <View style={{marginRight:'5%', alignSelf:'center'}}>
                <Notifications/>
            </View>
        </View>
    )
}

export default Profile_Name